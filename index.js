// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation steps?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide any instructions and/or examples of usage for the project here:',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Provide information of all contributors and third-parties here:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your github username:',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Is your license MIT, GPL 3.0, APACHE 2.0, or None?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should the user use to run tests?'
  }
];

// generate file
function writeFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}



// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log('ReadME has been generated');
    writeFile('README.md', generateMarkdown({ ...responses }));
  })
}

// Function call to initialize app
init();
