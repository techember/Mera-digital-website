const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// I need to change:
// background: '#1c2256' -> background: '#fff' or '#ffffff' or 'var(--color-base)'
// text colors from white to dark blue.
content = content.replace(`.partners-section-wrapper {
          padding: 80px 20px;
          background: #1c2256;`, `.partners-section-wrapper {
          padding: 80px 20px;
          background: #ffffff;`);

content = content.replace(`.partners-heading {
          font-size: 38px;
          font-weight: 800;
          color: #fff;
          text-align: center;
          margin-bottom: 12px;
        }`, `.partners-heading {
          font-size: 38px;
          font-weight: 800;
          color: var(--color-primary);
          text-align: center;
          margin-bottom: 12px;
        }`);

content = content.replace(`.partners-sub {
          text-align: center;
          color: #d1d8ff;
          font-size: 16px;
          margin-bottom: 50px;
        }`, `.partners-sub {
          text-align: center;
          color: #555;
          font-size: 16px;
          margin-bottom: 50px;
        }`);

content = content.replace(`box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);`, `box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);`);

fs.writeFileSync(filePath, content);
console.log('Done!');
