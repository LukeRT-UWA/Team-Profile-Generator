//Require file system.
const fs = require('fs');
//Require inquirer.
const inquirer = require('inquirer');
//Require Jest?

//Require markdown file
const markdown = require('./lib/markdown')

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
            name: 'memberRole',
            choices: [
                'Manager',
                'Engineer',
                'Intern',

            ]
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