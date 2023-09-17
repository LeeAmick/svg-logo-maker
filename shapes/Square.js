const Shape = require("./Shape");

class Square extends Shape {
  constructor() {
    super();
  }
  render() {
    return `<rect x="20" y="20" width="150" height="150" fill="${this.color}" />`;
  }
}

module.exports = Square;
