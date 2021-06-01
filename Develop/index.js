// TODO: Include packages needed for this application
const inquier = require('inquier')
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        name:'username', 
        message:'Please enter your Github username.', 
        type: 'input', 
        validate: function (answer) {
            if (answer.length <=1) {
                return console.log ("A github user name is required.")
            }
            return true; 
        }
    },
    {
        name:'title', 
        message:'Please enter the title of your applications repository.', 
        type: 'input', 
        validate: function (answer) {
            if (answer.length <=1) {
                return console.log ("An application repositorty is required.")
            }
            return true; 
        }
    },
    {
        name:'description', 
        message:'Please enter the applications description.', 
        type: 'input', 
        validate: function (answer) {
            if (answer.length <=1) {
                return console.log ("An application description is required.")
            }
            return true; 
        }
    },
    {
        name:'email', 
        message:'Please enter a valid email address.', 
        type: 'input', 
        validate: function (answer) {
            if (answer.length <=1) {
                return console.log ("An email address is required.")
            }
            return true; 
        }
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
