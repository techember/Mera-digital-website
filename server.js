const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf'
};

// Helper to check if file exists
function fileExists(p) {
  try {
    return fs.statSync(p).isFile();
  } catch (e) {
    return false;
  }
}

// Recursively load and inline files included via include statements
function resolveIncludes(content, currentDir) {
  let changed = true;
  let iterations = 0;
  
  // To avoid infinite loops in case of circular includes, cap iterations
  while (changed && iterations < 20) {
    changed = false;
    iterations++;

    // 1. Resolve includes inside PHP blocks:
    // Match <?php ... ?> blocks and find include statements within them
    content = content.replace(/(<\?php)([\s\S]*?)(\?>)/g, (phpBlock, startTag, phpCode, endTag) => {
      const innerIncludeRegex = /include\s+['"]([^'"]+)['"]\s*;/g;
      let match;
      let blockChanged = false;
      let newBlockCode = phpCode;

      while ((match = innerIncludeRegex.exec(phpCode)) !== null) {
        const includeFile = match[1];
        const includePath = path.resolve(currentDir, includeFile);
        if (fileExists(includePath)) {
          let includeContent = fs.readFileSync(includePath, 'utf8');
          // Recursively resolve includes inside the included file
          includeContent = resolveIncludes(includeContent, path.dirname(includePath));
          
          // Replace the include statement with: closing PHP, included content, reopening PHP
          const replacement = `?>\n${includeContent}\n<?php`;
          newBlockCode = newBlockCode.replace(match[0], replacement);
          blockChanged = true;
          changed = true;
        } else {
          console.warn(`Include file not found inside PHP block: ${includePath}`);
        }
      }
      if (blockChanged) {
        return `${startTag}${newBlockCode}${endTag}`;
      }
      return phpBlock;
    });

    // 2. Resolve standalone includes outside PHP blocks:
    // e.g. <?php include 'includes/header.php'; ?>
    const standaloneIncludeRegex = /<\?php\s+include\s+['"]([^'"]+)['"]\s*;\s*\?>/g;
    let match;
    while ((match = standaloneIncludeRegex.exec(content)) !== null) {
      const includeFile = match[1];
      const includePath = path.resolve(currentDir, includeFile);
      if (fileExists(includePath)) {
        let includeContent = fs.readFileSync(includePath, 'utf8');
        includeContent = resolveIncludes(includeContent, path.dirname(includePath));
        content = content.replace(match[0], includeContent);
        changed = true;
        standaloneIncludeRegex.lastIndex = 0; // reset search index
        break;
      } else {
        console.warn(`Standalone include file not found: ${includePath}`);
        content = content.replace(match[0], '');
        changed = true;
        standaloneIncludeRegex.lastIndex = 0;
        break;
      }
    }
  }
  return content;
}

// Parse variables defined in PHP, ignoring comments
function parseVariables(content) {
  const context = {};
  
  // Strip comments first to avoid matching commented-out variables or placeholder notes
  const cleanContent = content
    .replace(/\/\*[\s\S]*?\*\//g, '') // remove /* ... */ comments
    .replace(/\/\/.*/g, '')          // remove // ... comments
    .replace(/#.*/g, '');            // remove # ... comments
  
  // Parse string variables: $var = "value"; or $var = 'value';
  const strRegex = /\$(\w+)\s*=\s*(["'])([\s\S]*?)\2\s*;/g;
  let match;
  while ((match = strRegex.exec(cleanContent)) !== null) {
    context[match[1]] = match[3];
  }
  
  // Parse array variables: $var = [ "val1", "val2" ];
  const arrRegex = /\$(\w+)\s*=\s*\[([\s\S]*?)\]\s*;/g;
  while ((match = arrRegex.exec(cleanContent)) !== null) {
    const varName = match[1];
    const arrContent = match[2];
    const items = [];
    const itemRegex = /(["'])([\s\S]*?)\1/g;
    let itemMatch;
    while ((itemMatch = itemRegex.exec(arrContent)) !== null) {
      items.push(itemMatch[2]);
    }
    context[varName] = items;
  }
  
  return context;
}

// Evaluate loops, conditionals and echos
function evaluateTemplates(content, context) {
  // 1. Process foreach loops:
  // <?php foreach($points as $p){ ?> ... <?php } ?>
  const foreachRegex = /<\?php\s+foreach\s*\(\s*\$(\w+)\s+as\s+\$(\w+)\s*\)\s*\{\s*\?>([\s\S]*?)<\?php\s*\}\s*\?>/g;
  let match;
  while ((match = foreachRegex.exec(content)) !== null) {
    const fullMatch = match[0];
    const arrayName = match[1];
    const loopVarName = match[2];
    const loopBody = match[3];
    
    const array = context[arrayName];
    let renderedLoop = '';
    if (Array.isArray(array)) {
      for (const item of array) {
        let evaluatedBody = loopBody;
        
        // Replace <?php echo $p; ?>
        const echoVarRegex = new RegExp(`<\\?php\\s+echo\\s+\\$${loopVarName}\\s*;?\\s*\\?>`, 'g');
        evaluatedBody = evaluatedBody.replace(echoVarRegex, item);
        
        // Handle short tags inside loop e.g. <?=$p?>
        const shortVarRegex = new RegExp(`<\\?=\\s*\\$${loopVarName}\\s*\\?>`, 'g');
        evaluatedBody = evaluatedBody.replace(shortVarRegex, item);
        
        renderedLoop += evaluatedBody;
      }
    }
    content = content.replace(fullMatch, renderedLoop);
    foreachRegex.lastIndex = 0;
  }

  // 2. Process simple if conditionals:
  // <?php if(!empty($points)){ ?> ... <?php } ?>
  const ifRegex = /<\?php\s+if\s*\(\s*!empty\s*\(\s*\$(\w+)\s*\)\s*\)\s*\{\s*\?>([\s\S]*?)<\?php\s*\}\s*\?>/g;
  while ((match = ifRegex.exec(content)) !== null) {
    const fullMatch = match[0];
    const varName = match[1];
    const ifBody = match[2];
    
    const value = context[varName];
    const hasValue = value && (Array.isArray(value) ? value.length > 0 : String(value).trim() !== '');
    
    content = content.replace(fullMatch, hasValue ? ifBody : '');
    ifRegex.lastIndex = 0;
  }

  // 3. Process echo statements:
  // <?php echo $var_name; ?> or <?=$var_name?>
  const echoRegex = /<\?php\s+echo\s+\$(\w+)\s*;?\s*\?>/g;
  while ((match = echoRegex.exec(content)) !== null) {
    const fullMatch = match[0];
    const varName = match[1];
    const val = context[varName] !== undefined ? context[varName] : '';
    content = content.replace(fullMatch, val);
    echoRegex.lastIndex = 0;
  }
  
  const shortEchoRegex = /<\?=\s*\$(\w+)\s*\?>/g;
  while ((match = shortEchoRegex.exec(content)) !== null) {
    const fullMatch = match[0];
    const varName = match[1];
    const val = context[varName] !== undefined ? context[varName] : '';
    content = content.replace(fullMatch, val);
    shortEchoRegex.lastIndex = 0;
  }

  // 4. Strip any remaining <?php ... ?> tags
  content = content.replace(/<\?php[\s\S]*?\?>/g, '');

  return content;
}

// Main PHP rendering entrypoint
function renderPHP(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const fileDir = path.dirname(filePath);

  // Parse variable declarations from the file before resolving includes
  const context = parseVariables(content);

  // Inline all include statements recursively
  content = resolveIncludes(content, fileDir);

  // Extract variables again from the merged content (now safe because comments are ignored)
  const mergedContext = { ...context, ...parseVariables(content) };

  // Evaluate dynamic templates
  content = evaluateTemplates(content, mergedContext);

  return content;
}

function serveStaticFile(targetPath, req, res) {
  const ext = path.extname(targetPath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  
  try {
    const stat = fs.statSync(targetPath);
    const totalSize = stat.size;
    const range = req.headers.range;
    
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1;
      
      if (start >= totalSize || end >= totalSize) {
        res.writeHead(416, { 'Content-Range': `bytes */${totalSize}` });
        return res.end();
      }
      
      const chunksize = (end - start) + 1;
      const fileStream = fs.createReadStream(targetPath, { start, end });
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${totalSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType,
      });
      fileStream.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': totalSize,
        'Content-Type': contentType,
      });
      fs.createReadStream(targetPath).pipe(res);
    }
  } catch (err) {
    res.writeHead(500);
    res.end(`Server Error: ${err.code}`);
  }
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  pathname = decodeURIComponent(pathname);

  let targetPath = path.join(BASE_DIR, pathname);
  
  if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()) {
    targetPath = path.join(targetPath, 'index.php');
  }

  if (!fs.existsSync(targetPath) && !path.extname(targetPath)) {
    if (fs.existsSync(targetPath + '.php')) {
      targetPath += '.php';
    }
  }

  if (!fs.existsSync(targetPath)) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1><p>The requested URL was not found on this server.</p>');
    return;
  }

  const ext = path.extname(targetPath).toLowerCase();

  if (ext === '.php') {
    try {
      const renderedHtml = renderPHP(targetPath);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(renderedHtml);
    } catch (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end(`<h1>500 Internal Server Error</h1><pre>${err.stack}</pre>`);
    }
  } else {
    serveStaticFile(targetPath, req, res);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
