//Require file system.
const fs = require('fs');
//Require inquirer.
const inquirer = require('inquirer');
//Require Jest?

//Require markdown file
const markdown = require('./lib/markdown');
const employees = [];
function askForEmployee(type = "Manager") {
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

function main() {
    return askForEmployee("Manager")
        .then((answers) => {
            employees.push(new Manager(...Object.values(answers)));
        })
        .then()
        .catch((err) => {
            console.log(err);
        });
}
main();