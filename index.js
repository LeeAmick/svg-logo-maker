const inquirer = require("inquirer");
const generateSVG = require("./lib/generateSVG");
const fs = require("fs"); // Add this import for file system operations

const questions = [
  {
    type: "input",
    name: "logo_text_input",
    message: "Please enter up to three characters for your logo: ",
    validate: validateLogoLength,
  },
  {
    type: "input",
    name: "logo_color_input",
    message:
      "Please enter text color (either color keyword or a hexadecimal number): ",
    validate: checkColor,
  },
  {
    type: "list",
    name: "shape_input",
    message: "Please select shape for your logo: ",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "shape_color_input",
    message:
      "Please enter shape color (either color keyword or a hexadecimal number): ",
    validate: checkColor,
  },
];

function validateLogoLength(text) {
  if (text.length <= 3 && text.length > 0) {
    return true;
  }
  return "Logo needs to be at least 1 character and can maximum be 3 characters long. Try again.";
}

function checkColor(color) {
  if (color !== "") {
    return true;
  }
  return "Please enter color.";
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
  );
}

function init() {
  console.log("Initializing...");

  inquirer.prompt(questions).then((answers) => {
    writeToFile("./logo.svg", generateSVG(answers));
  });
}

init();
