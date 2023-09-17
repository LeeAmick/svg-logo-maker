const TextRenderer = require("./TextRenderer");

class SquareText extends TextRenderer {
  render(textColor, text) {
    return `<text x="95" y="110" font-size="60" text-anchor="middle" fill="${textColor}">
    ${text.toUpperCase()}
  </text>`;
  }
}

module.exports = SquareText;
