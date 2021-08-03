//Require file system.
const fs = require('fs');
//Require inquirer.
const inquirer = require('inquirer');
//Require Jest?

//Require each role
const Manager = require('./src/employees/Manager')
const Engineer = require('./src/employees/Engineer')
const Intern = require('./src/employees/Intern')
// Require markdown file
const markdown = require('./lib/markdown');

//Blank array to add response info to
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
            throw new Error("Failed wrong or no type provided")
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
                    new inquirer.Separator(),
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
                    renderPage(employees)
                    break;

            }
        });
}

function renderPage(employees) {
   // stop the program
                    // render the html

                     
                
                    //Create readme file
                    fs.writeFile('index.html', markdown.generatePage(), function (err) {
                        if (err) { console.error(err) }
                    }
                    )
                    // 
                    //Create readme file
                    for (let index = 0; index < employees.length; index++) {
                        const employee = employees[index];
                        console.log(employee)
                        console.log(employee.constructor.name)
                        
                        if(employee.constructor.name === "Manager") {
                            fs.appendFile('index.html', markdown.generateMiddleManager(employee), function (err) {
                                if (err) { console.error(err) }
                        })}

                        else if(employee.constructor.name === "Engineer") {
                            fs.appendFile('index.html', markdown.generateMiddleEngineer(employee), function (err) {
                                if (err) { console.error(err) }
                        })}

                        else if(employee.constructor.name === "Intern") {
                            fs.appendFile('index.html', markdown.generateMiddleIntern(employee), function (err) {
                                if (err) { console.error(err) }
                        })}
                    }

                    finishPage()

                    
                 
            

}
function finishPage(){
    fs.appendFile('index.html', markdown.generateEnd(), function (err) {
        if (err) { console.error(err) }
    }
    )}