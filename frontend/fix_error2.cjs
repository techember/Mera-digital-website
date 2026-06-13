const fs = require('fs');
const path = require('path');
const cssPath = path.join(__dirname, 'src', 'index.css');
let lines = fs.readFileSync(cssPath, 'utf8').split('\n');

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

lines.splice(260, 18, goodBlock);
fs.writeFileSync(cssPath, lines.join('\n'));
console.log('Fixed block using exact line indices.');
