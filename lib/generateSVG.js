const { Triangle, Circle, Square } = require("./shapes/Shape");
const { CircleText, TriangleText, SquareText } = require("./textRenderers/TextRenderer");

function generateSVG(data) {
  let shapeToRender;
  let textToRender;
  let shape;
  if (data.shape_input === "Triangle") {
    shape = new Triangle();
    shape.setColor(data.shape_color_input);
    shapeToRender = shape.render();

    textToRender = new TriangleText().render(
      data.logo_color_input,
      data.logo_text_input
    );
  }
  if (data.shape_input === "Circle") {
    shape = new Circle();
    shape.setColor(data.shape_color_input);
    shapeToRender = shape.render();

    textToRender = new CircleText().render(
      data.logo_color_input,
      data.logo_text_input
    );
  }
  if (data.shape_input === "Square") {
    shape = new Square();
    shape.setColor(data.shape_color_input);
    shapeToRender = shape.render();
    
    textToRender = new SquareText().render(
      data.logo_color_input,
      data.logo_text_input
    );
  }
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeToRender}
    ${textToRender}
</svg>`;
}

module.exports = generateSVG;
