const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating view engine
app.set('view engine', 'ejs');
// Resolve views folder relative to root directory
app.set('views', path.join(__dirname, '..', 'views'));

// Default local variables for template interpolation (prevents EJS ReferenceErrors)
app.use((req, res, next) => {
  res.locals.page_title = '';
  res.locals.page_desc = '';
  res.locals.page_about = '';
  res.locals.page_image = '';
  res.locals.points = [];
  next();
});

// Serve static assets from /public folder.
// All requests come through Express (Vercel routes everything to api/index.js).
app.use(express.static(path.join(__dirname, '..', 'public')));

// Dynamic routing middleware for pages
app.get('*', (req, res, next) => {
  let pathname = req.path;

  // Decode URI component (e.g. spaces in paths)
  pathname = decodeURIComponent(pathname);

  // Default to index if visiting root
  if (pathname === '/') {
    pathname = '/index';
  }

  // Handle links ending with .php extension silently
  if (pathname.endsWith('.php')) {
    pathname = pathname.slice(0, -4);
  }

  // Remove leading slash to get the template view name
  const viewName = pathname.slice(1);
  const viewFilePath = path.join(__dirname, '..', 'views', `${viewName}.ejs`);

  // Render view if file exists, else proceed to 404
  if (fs.existsSync(viewFilePath)) {
    res.render(viewName);
  } else {
    next();
  }
});

// 404 Error handler page
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1><p>The requested page was not found on this server.</p>');
});

// Run standalone server locally or if not in Vercel environment
if (require.main === module || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Node.js server is running at http://localhost:${PORT}`);
  });
}

// Export the Express app for Vercel serverless function
module.exports = app;
