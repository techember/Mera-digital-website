const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

if (!css.includes('--color-primary:')) {
  const rootVars = `
:root {
  --color-primary: #1C2256;
  --color-primary-dark: #12163b;
  --color-primary-light: #2c357b;
  --color-golden: #e9b02b;
  --color-red: #d93c18;
  --color-base: #e4ddd6;
  
  --gradient-primary: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  --gradient-accent: linear-gradient(135deg, var(--color-golden), var(--color-red));
}

`;
  css = rootVars + css;
}

const replacements = [
  { regex: /#0a144a/gi, replace: 'var(--color-primary)' },
  { regex: /#13205e/gi, replace: 'var(--color-primary-light)' },
  { regex: /#0e1c55/gi, replace: 'var(--color-primary-dark)' },
  { regex: /#ff6a00/gi, replace: 'var(--color-golden)' },
  { regex: /#ff8c00/gi, replace: 'var(--color-red)' },
  { regex: /#ff9a40/gi, replace: 'var(--color-golden)' },
  { regex: /#f8fafc/gi, replace: '#faf8f5' },
  { regex: /#e2e8f0/gi, replace: 'var(--color-base)' },
  { regex: /#f1f5f9/gi, replace: '#f0ece6' },
  { regex: /#fff8f5/gi, replace: '#fcfbf8' },
];

replacements.forEach(({ regex, replace }) => {
  css = css.replace(regex, replace);
});

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Theme successfully replaced.');
