// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./assets/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project. (Required)',
        validate: userAnswer => {
            if(userAnswer) {
                return true;
            } else {
                console.log('Please enter the title of your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username. (Required)',
        validate: userAnswer => {
            if(userAnswer) {
                return true;
            } else {
                console.log('Please enter your github username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the name of your repository. (Required)',
        validate: userAnswer => {
            if(userAnswer) {
                return true;
            } else {
                console.log('Please enter the name of your repository.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address. (Required)',
        validate: userAnswer => {
            if(userAnswer) {
                return true;
            } else {
                console.log('Please enter your email address.');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license would you like to apply for this project. (Required)',
        choices: ['GNU', 'MPL', 'Apache', 'MIT', 'The Unlicense'],
        validate: userAnswer => {
            if(userAnswer) {
                return true;
            } else {
                console.log('Please choose a license.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'If you would like to include a description, do so here, else hit enter without entering any text or spaces.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'If you would like to include installation instructions, do so here, else hit enter without entering any text or spaces.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'If you would like to include usage info, do so here, else hit enter without entering any text or spaces.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'If you would like to include contribution guidelines, do so here, else hit enter without entering any text or spaces.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'If you would like to include test functions, do so here, else hit enter without entering any text or spaces.',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, readMeText) {
    fs.writeFile(`${fileName}.md`, readMeText, err => {
        if (err) throw new Error(err);

        console.log('File written! Please checkout README.md in this directory to see it!');
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(userSelection => {
        console.log(userSelection);
        //generateMarkdown(userSelection);
    });
