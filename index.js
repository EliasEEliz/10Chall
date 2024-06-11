const fs = require('./node_modules/graceful-fs/graceful-fs')
const inquirer = require("inquirer");
const {Triangle, Circle, Square} = require("./lib/shapes");

class Svg{
    constructor(){
            this.textElement = '';
            this.shapeElement = '';
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
    setTextElement(text,color){
        this.textElement = `text x="150" y="125" font-size="60" text-anchor="middle"`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter 3 Characters",
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter a color or a hexadecimal number for the text",
    },
    {
        type: "input",
        name: "shape",
        message: "Enter a color or a hexadecimal for the shape",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Choose which shape you want",
        choices: ["Triangle", "Circle", "Square"],
    },
];
function writeToFile(fileName, data) {
	console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have Generated a logo.svg!");
    });
}
async function init() {
    console.log("Starting init");
	var svgString = "";
	var svg_file = "logo.svg";

    const answers = await inquirer.prompt(questions);
}
init()