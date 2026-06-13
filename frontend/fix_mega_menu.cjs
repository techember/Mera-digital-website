const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// I will find `.mega-col h4 {` and replace everything up to `@media(max-width:900px) {`
const startStr = '.mega-col h4 {';
const endStr = '@media(max-width:900px) {';

let start = css.indexOf(startStr);
let end = css.indexOf(endStr);

if (start !== -1 && end !== -1) {
  const replacement = `.mega-col h4 {
  font-size: 14px;
  font-weight: 600;
  color: #111;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.mid-title {
  margin-top: 18px;
  padding-top: 12px;
  border-top: 1px solid #eee;
}

.mega-col a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  font-size: 14px;
  color: #333 !important;
  font-weight: 500;
  transition: .2s;
}

.mega-col a:hover {
  color: var(--color-red) !important;
  transform: translateX(4px);
}

.dot {
  width: 6px;
  height: 6px;
  background: var(--color-golden);
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.menu-toggle {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
}

`;
  css = css.substring(0, start) + replacement + css.substring(end);
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Fixed mega menu visibility via script.');
} else {
  console.log('Could not find boundaries.');
}
