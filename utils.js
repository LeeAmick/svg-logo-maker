const fs = require("fs");

function saveSVG(svgCode) {
  fs.writeFileSync("logo.svg", svgCode);
}

module.exports = { saveSVG };
