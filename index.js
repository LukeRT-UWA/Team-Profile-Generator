//Require file system.
const fs = require('fs');
//Require inquirer.
const inquirer = require('inquirer');
//Require Jest?

//Require markdown file

//Require each role
//Manager
const Manager = require('./src/employees/Manager')
const Engineer = require('./src/employees/Engineer')
const Engineer = require('./src/employees/Intern')
const markdown = require('./lib/markdown');
const employees = [];

function main() {
    return askForEmployee("Manager")
        .then((answers) => {
            employees.push(new Manager(...Object.values(answers)));
            console.log(employees)
        })
        .then(() => {
            askForRole()
        })
        
        .catch((err) => {
            console.log(err);
        });
}
main();




function askForEmployee(type) {
    const baseQuestions = [
        {
            type: "input",
            message: `What is this ${type}'s name?`,
            name: "name",

        },
        {
            type: "input",
            message: `What is this ${type}'s ID number?`,
            name: "id",

        },
        {
            type: "input",
            message: `What is this ${type}'s E-mail address?`,
            name: "email",

        },

    ];

    switch (type) {
        case "Manager":
            baseQuestions.push({
                type: "input",
                message: `What is this ${type}'s Office Number?`,
                name: "officeNo",

            })
            break;
        case "Engineer":
            baseQuestions.push({
                type: "input",
                message: `What is this ${type}'s Github name?`,
                name: "github",

            })
            break;
        case "Intern":
            baseQuestions.push({
                type: "input",
                message: `What is this ${type}'s school name?`,
                name: "school",

            })
            break;
        default:
            throw new Error("Failed no type provided")
    }

    return inquirer.prompt(baseQuestions)

}

function askForRole() {
    return inquirer
        .prompt([
            {
                type: 'list',
                message: 'What additional employee do you want to add?',
                name: 'role',
                choices: [
                    'Engineer',
                    'Intern',
                    'No more employees to add',

                ]
            },
        ])
        .then((response) => {
            switch (response.role) {
                case "Engineer":
                    //Run engineer questions
                    {
                        return askForEmployee("Engineer")
                            .then((answers) => {
                                employees.push(new Engineer(...Object.values(answers)));
                                console.log(employees)
                            })
                            .then(() => {
                                askForRole()
                            })
                            
                            .catch((err) => {
                                console.log(err);
                            });
                    }
                case "Intern":
                    // Run intern questions
                    {
                        return askForEmployee("Intern")
                            .then((answers) => {
                                employees.push(new Intern(...Object.values(answers)));
                                console.log(employees)
                            })
                            .then(() => {
                                askForRole()
                            })
                            
                            .catch((err) => {
                                console.log(err);
                            });
                    }
                case "No more employees to add":
                    // stop the program
                    // render the html
                    let employeesDone = employees
                    let pageContent = markdown.generateReadme(employeesDone)

                    //Create readme file
                    fs.writeFile('index.html', pageContent, (err) =>
                        err ? console.error(err) : console.log('Success!')
                    )
                    break;

            }
        });
}