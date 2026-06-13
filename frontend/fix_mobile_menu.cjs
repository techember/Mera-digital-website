const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

const targetStr = '@media(max-width:900px) {';
// The block goes until `/* ================= HERO ================= */`
const endStr = '/* ================= HERO ================= */';

let start = css.indexOf(targetStr);
let end = css.indexOf(endStr);

if (start !== -1 && end !== -1) {
  // Replace the entire @media block that was mangled.
  const replacement = `@media(max-width:900px) {
  .menu {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    max-height: calc(100vh - 70px);
    overflow-y: auto;
    background: #fff;
    flex-direction: column;
    display: none;
    padding: 20px;
    z-index: 998;
    box-shadow: 0 10px 30px rgba(0, 0, 0, .1);
  }

  .menu.show {
    display: flex;
  }

  .header .menu a {
    color: var(--color-primary);
  }

  .menu-toggle {
    display: block;
  }

  .mega-menu {
    position: static;
    transform: none;
    width: 100%;
    flex-direction: column;
    box-shadow: none;
    padding: 15px;
  }

  .mega-col {
    width: 100%;
  }
}

`;
  
  // Wait, there might be other @media(max-width:900px) blocks. Let's just do a string replacement on the exact mangled portion.
  // My previous bad replacement removed `.menu {` and `.menu.show`.
  
  // Let me just restore the whole section from line 258 to 297 using my knowledge.
  css = css.substring(0, start) + replacement + css.substring(end);
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Fixed mobile menu visibility and scrolling via script.');
} else {
  console.log('Could not find boundaries.');
}
