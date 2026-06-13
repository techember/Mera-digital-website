const fs = require('fs');
const path = require('path');
const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

const badBlock = `
  .menu-toggle {
    display: block
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
    width: 100%
  }
}`;

const goodBlock = `@media(max-width:900px) {
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
}`;

if (css.includes(badBlock)) {
  css = css.replace(badBlock, goodBlock);
  fs.writeFileSync(cssPath, css);
  console.log('Fixed syntax error via script.');
} else {
  console.log('Bad block not found!');
}
