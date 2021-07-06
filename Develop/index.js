// TODO: Include packages needed for this application
const inquirer = require('inquirer')
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
        name: 'installation',
        type: 'input',
        message: 'Are there any project installation instructions?'
    },
    
    {
        name: 'repo',
        type: 'input',
        message: 'What is the name of the Project Repository?'
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
    
    {
        name:'usage', 
        message:'Please enter the usage of the application.', 
        type: 'input', 
    },
    
    {   
        name:'contributions', 
        message:'Please enter all contributors on the project.', 
        type: 'input', 
    },

    {   
        name:'tests', 
        message:'Please enter any other uses of the applications.', 
        type: 'input', 
    },

    {
        name:'license', 
        message:'Please select which license you would like to use?', 
        type: 'list',
        choices: ['apache-2.0', 'BSD 3-Clause "New" or "Revised"', 'GNU General Public License v3.0', 'MIT' ]
    },

    {
        name:'installation', 
        message:'Please enter any install instructions to run project.', 
        type: 'input'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("Generating file.");
        
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers));
    });}
// Function call to initialize app
init();
