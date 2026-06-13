const fs = require('fs');
const path = require('path');
const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

css = css.replace(`.hero-video video {
  width: 100%;
  max-width: 100%;
  height: 700px;
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, .2);
  object-fit: fill;
}`, `.hero-video video {
  width: 100%;
  max-width: 100%;
  height: 700px;
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, .2);
  object-fit: contain;
  background: #000;
}`);

// If it's `object-fit: cover;`, replace it too just in case.
css = css.replace(`.hero-video video {
  width: 100%;
  max-width: 100%;
  height: 700px;
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, .2);
  object-fit: cover;
}`, `.hero-video video {
  width: 100%;
  max-width: 100%;
  height: 700px;
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, .2);
  object-fit: contain;
  background: #000;
}`);

fs.writeFileSync(cssPath, css);
console.log('Video CSS fixed');
