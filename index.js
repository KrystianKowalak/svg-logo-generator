const inquirer = require("inquirer");
const fs = require("fs");
const {generateLogo} = require("./lib/shapes");

const questions = [
    {
        type: "input",
        message: "Provide three characters for your logo: ",
        name: "inputText"
    },
    {
        type: "input",
        message: "Provide a text color for your characters: ",
        name: "inputTextColor"
    },
    {
        type: "list",
        message: "Which shape would you like to use for your logo: ",
        name: "inputShape",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input",
        message: "What color would you like your shape to be: ",
        name: "inputShapeColor"
    }
];

const responseHandler = (fileName, data) => {
    fs.writeFile(fileName, data, (error) =>
    error ? console.error(error) : console.log("Generated logo.svg!"))
}

const init = () => {
    inquirer
    .prompt(questions)
    .then(function (answers) {
        if(generateLogo(answers) != null) {
            responseHandler("logo.svg", generateLogo(answers));
        } else {
            console.log("Please provide correct values for your input!");
        }
    })
}

init();