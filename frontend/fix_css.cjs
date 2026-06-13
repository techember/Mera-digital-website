const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

const missing = `
.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

h1,
h2,
h3 {
  font-weight: 700;
}

section {
  padding: 70px 0;
}

.light {
  background: var(--color-base);
}

/* ================= BUTTONS ================= */
.btn-primary {
  background: var(--color-primary);
  color: #fff;
  padding: 14px 28px;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  border: none;
  transition: .3s;
  cursor: pointer;
}

.btn-primary:hover {
  background: var(--color-primary-light);
  transform: translateY(-2px);
}

.btn-outline {
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  padding: 10px 26px;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  transition: .3s;
}

.btn-outline:hover {
  background: var(--color-primary);
  color: #fff;
}

/* ================= HEADER ================= */
.header {
  background: var(--color-primary);
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 8px 25px rgba(0, 0, 0, .08);
}

.header .logo {
  color: #fff;
}

.header .menu a {
  color: #e4ddd6;
}

.header .menu a:hover {
  color: var(--color-golden);
}

.nav {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
`;

let start = css.indexOf('/* ================= COMMON ================= */');
let end = css.indexOf('.logo img {');

if (start !== -1 && end !== -1) {
  css = css.substring(0, start) + "/* ================= COMMON ================= */\n" + missing + "\n" + css.substring(end);
}

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Fixed CSS corruption and made primary color prominent.');
