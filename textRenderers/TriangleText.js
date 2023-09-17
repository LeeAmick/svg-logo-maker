const TextRenderer = require("./TextRenderer");

class TriangleText extends TextRenderer {
  render(textColor, text) {
    return `<text x="150" y="140" font-size="40" text-anchor="middle" fill="${textColor}">
    ${text.toUpperCase()}
  </text>`;
  }
}

module.exports = TriangleText;
