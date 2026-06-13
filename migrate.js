const fs = require('fs');
const path = require('path');

const SOURCE_DIR = __dirname;
const VIEWS_DIR = path.join(SOURCE_DIR, 'views');
const INCLUDES_DIR = path.join(VIEWS_DIR, 'includes');

// Helper to create directory if not exists
if (!fs.existsSync(VIEWS_DIR)) {
  fs.mkdirSync(VIEWS_DIR);
}
if (!fs.existsSync(INCLUDES_DIR)) {
  fs.mkdirSync(INCLUDES_DIR);
}

// Strip comments from PHP to parse variables safely
function stripComments(content) {
  return content
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*/g, '')
    .replace(/#.*/g, '');
}

// Extract PHP variables
function parseVariables(content) {
  const context = {};
  const cleanContent = stripComments(content);
  
  // Parse string variables
  const strRegex = /\$(\w+)\s*=\s*(["'])([\s\S]*?)\2\s*;/g;
  let match;
  while ((match = strRegex.exec(cleanContent)) !== null) {
    context[match[1]] = match[3];
  }
  
  // Parse array variables
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

// Convert general PHP template tags to EJS
function translatePHPToEJS(content) {
  // Replace simple echos
  let output = content
    .replace(/<\?php\s+echo\s+\$(\w+)\s*;?\s*\?>/g, '<%= $1 %>')
    .replace(/<\?=\s*\$(\w+)\s*\?>/g, '<%= $1 %>');

  // Replace includes
  output = output
    .replace(/<\?php\s+include\s+['"]includes\/header\.php['"]\s*;\s*\?>/g, "<%- include('includes/header') %>")
    .replace(/<\?php\s+include\s+['"]includes\/footer\.php['"]\s*;\s*\?>/g, "<%- include('includes/footer') %>")
    .replace(/<\?php\s+include\s+['"]header\.php['"]\s*;\s*\?>/g, "<%- include('includes/header') %>")
    .replace(/<\?php\s+include\s+['"]footer\.php['"]\s*;\s*\?>/g, "<%- include('includes/footer') %>");

  // Keep track of nested control structures to handle }
  const tags = [];
  const phpTagRegex = /<\?php([\s\S]*?)\?>/g;
  output = output.replace(phpTagRegex, (match, phpCode) => {
    phpCode = phpCode.trim();
    if (phpCode.startsWith('if')) {
      tags.push('if');
      const varMatch = phpCode.match(/!empty\s*\(\s*\$(\w+)\s*\)/);
      const varName = varMatch ? varMatch[1] : 'true';
      return `<% if (typeof ${varName} !== 'undefined' && ${varName} && ${varName}.length > 0) { %>`;
    } else if (phpCode.startsWith('foreach')) {
      tags.push('foreach');
      const loopMatch = phpCode.match(/foreach\s*\(\s*\$(\w+)\s+as\s+\$(\w+)\s*\)/);
      const arrayName = loopMatch ? loopMatch[1] : '[]';
      const itemName = loopMatch ? loopMatch[2] : 'item';
      return `<% if (typeof ${arrayName} !== 'undefined') { ${arrayName}.forEach(function(${itemName}) { %>`;
    } else if (phpCode === '}') {
      const lastTag = tags.pop();
      if (lastTag === 'foreach') {
        return `<% }); } %>`;
      } else {
        return `<% } %>`;
      }
    }
    return match; // Keep as is if unhandled
  });

  // Strip any remaining untranslated PHP blocks
  output = output.replace(/<\?php[\s\S]*?\?>/g, '');

  return output;
}

// Read the workspace files
const files = fs.readdirSync(SOURCE_DIR);

files.forEach(file => {
  if (path.extname(file) === '.php') {
    const filePath = path.join(SOURCE_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const baseName = path.basename(file, '.php');

    // 1. Check if it's a template-driven service page
    if (content.includes("include 'service-template.php';") || content.includes('include "service-template.php";')) {
      const variables = parseVariables(content);
      const ejsContent = `<%- include('service-template', ${JSON.stringify(variables, null, 2)}) %>\n`;
      const destPath = path.join(VIEWS_DIR, `${baseName}.ejs`);
      fs.writeFileSync(destPath, ejsContent, 'utf8');
      console.log(`Migrated template-driven page: ${file} -> views/${baseName}.ejs`);
    } else {
      // 2. Standalone page
      const ejsContent = translatePHPToEJS(content);
      const destPath = path.join(VIEWS_DIR, `${baseName}.ejs`);
      fs.writeFileSync(destPath, ejsContent, 'utf8');
      console.log(`Migrated standalone page: ${file} -> views/${baseName}.ejs`);
    }
  }
});

// Migrate files inside the 'includes' folder
const includesSrcDir = path.join(SOURCE_DIR, 'includes');
if (fs.existsSync(includesSrcDir)) {
  const includeFiles = fs.readdirSync(includesSrcDir);
  includeFiles.forEach(file => {
    if (path.extname(file) === '.php') {
      const filePath = path.join(includesSrcDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const baseName = path.basename(file, '.php');
      const ejsContent = translatePHPToEJS(content);
      const destPath = path.join(INCLUDES_DIR, `${baseName}.ejs`);
      fs.writeFileSync(destPath, ejsContent, 'utf8');
      console.log(`Migrated include file: includes/${file} -> views/includes/${baseName}.ejs`);
    }
  });
}

console.log('Migration completed successfully!');
