//Require file system.
const fs = require('fs');
//Require inquirer.
const inquirer = require('inquirer');
//Require Jest?

//Require markdown file
const markdown = require('.\lib\markdown.js')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your team name?',
            name: 'teamName',
        },
        {
            type: 'input',
            message: `What is this team member's name?`,
            name: 'memberName',
        },
        {
            type: 'list',
            message: 'What role is this team member?',
            name: 'license',
            choices: [
                'Manager',
                'Engineer',
                'Intern',

            ]
        },
        {
            type: 'input',
            message: `What is this team member's ID?`,
            name: 'memberID',
        },
        {
            type: 'input',
            message: `What is this team member's e-mail address?`,
            name: 'memberEmail',
        },
        {
            type: 'input',
            message: `What is this team member's Office Number?`,
            name: 'memberOfficeNo',
        },
     


    ])
    .then((response) => {


        let pageContent = markdown.generatePage(response)

        //Create readme file
        fs.writeFile('index.html', pageContent, (err) =>
            err ? console.error(err) : console.log('Success!')
        )
    }
    );