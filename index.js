const inquirer = require('inquirer');
const fs = require('fs');
const generateTemplate = require('./src/template.js');
const employee = require('./lib/Employee.js');
const engineer = require('./lib/Engineer.js');
const intern = require('./lib/Intern.js');
const manager = require('./lib/Manager.js');



let managerInformation = '';
let internInformation = '';
let engineerInformation = '';
let employeeInformation = '';

//questions for manager/ intern/ employees and engineers!
const managerPrompt = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'Enter team manager name? (Required)',
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log('Your name must be entered at this time!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Id number?'
        }, {
            type: 'input',
            name: 'email',
            message: 'What is your Email address?'
        }, {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office Number?'
        }
    ])
}

const menuPrompt = () => {
    return inquirer.prompt([{
        type: 'list',
        name: 'menu',
        choices: ["Add-Engineer", "Add-Employee", "Add-Intern"]
    }])
}

const engineerPrompt = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your Engineers name? (required)',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Your name must be entered at this time!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Engineers work Id number?(required'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Engineers Email address?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Engineers gitHub link?'
        }
    ])
}

const employeePrompt = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your employees name? (Required)',
            validate: employeeName => {
                if (employeeName) {
                    return true;
                } else {
                    console.log('Your name must be entered at this time!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employees work Id number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your employees email address?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your employees school?'
        },
    ])
}

const internPrompt = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your interns name? (Required)',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Your name must be entered at this time!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your interns work Id number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your interns Email address?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your interns current school?'
        }
    ])
}

managerPrompt()

    .then(info => {
        const manager = new Manager(info)
        managerInformation = manager
        console.table(manager)
        console.log(manager.name)
    })
    .then(menuPrompt)
    .then(info => {
        if (info.menu === "Add-Employee") {
            employeePrompt()
                .then(info => {
                    const employee = new Employee(info)
                    employeeInformation = employee
                    console.table(employee)
                })
                .then(menuPrompt)
                .then(info => {
                    if (info.menu === "Add-Engineer") {
                        engineerPrompt()
                            .then(info => {
                                const engineer = new Engineer(info)
                                engineerInformation = engineer
                                console.table(engineer)
                            })
                            .then(menuPrompt)
                            .then(info => {
                                if (info.menu === "Add-Intern") {
                                    internPrompt()
                                        .then(info => {
                                            const intern = new Intern(info)
                                            internInformation = intern
                                            console.table(intern)
                                        })
                                        .then(menuPrompt)

                                }
                            })
                        // create a finish team section?
                    }
                })
        }
    })