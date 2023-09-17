const TextRenderer = require("./TextRenderer");

class CircleText extends TextRenderer {
  render(textColor, text) {
    return `<text x="150" y="115" font-size="60" text-anchor="middle" fill="${textColor}">
    ${text.toUpperCase()}
  </text>`;
  }
}

module.exports = CircleText;
