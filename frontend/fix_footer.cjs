const fs = require('fs');
const path = require('path');
const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// I will replace the media queries for the footer.
const oldQueries = `@media(max-width:1200px) {
  .footer-single-row {
    grid-template-columns: repeat(3, 1fr);
  }

  .footer-row1 {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-row2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media(max-width:700px) {
  .footer-single-row {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-row1 {
    grid-template-columns: 1fr;
  }

  .footer-row2 {
    grid-template-columns: 1fr;
  }
}

@media(max-width:440px) {
  .footer-single-row {
    grid-template-columns: 1fr;
  }
}`;

const newQueries = `@media(max-width:1200px) {
  .footer-single-row {
    grid-template-columns: repeat(3, 1fr);
  }
  .footer-single-row > .fc:first-child {
    grid-row: span 2;
  }

  .footer-row1 {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-row2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media(max-width:750px) {
  .footer-single-row {
    grid-template-columns: repeat(2, 1fr);
  }
  .footer-single-row > .fc:first-child {
    grid-column: span 2;
    grid-row: span 1;
  }

  .footer-row1 {
    grid-template-columns: 1fr;
  }

  .footer-row2 {
    grid-template-columns: 1fr;
  }
}

@media(max-width:480px) {
  .footer-single-row {
    grid-template-columns: 1fr;
  }
  .footer-single-row > .fc:first-child {
    grid-column: span 1;
  }
}`;

css = css.replace(oldQueries, newQueries);
fs.writeFileSync(cssPath, css);
console.log("Footer responsive CSS fixed!");
