const inquirer = require('inquirer');
//const fs = require('fs');
//const generateTemplate = require('./src/template.js');
//const employee = require('./lib/Employee.js');
//const engineer = require('./lib/Engineer.js');
//const intern = require('./lib/Intern.js');
//const Manager = require('./lib/Manager.js');



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
            type: 'list',
            name: 'id',
            message: 'What is your Id number?',
            choices: ["1", "2", "3", "4", "5"],
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your work ID number')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email address?'
        },
        {
            type: 'list',
            name: 'officeNumber',
            choices: ["1", "2", "3", "4", "5", "6", ],
            validate: officeNumberBlock => {
                if (officeNumberBlock) {
                    return true;
                } else {
                    console.log("Please select one of the following office numbers!")
                    return false;
                }
            }
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
    .then(menuPrompt)
    .then(answer => {
        if (answer.menu === "Add-Employee") {
            employeePrompt()
                .then(answer => {
                    const employee = new Employee(answer)
                    employeeInformation = employee
                    console.table(employee)
                })
        }
    })
    .then(menuPrompt)
    .then(answer => {
        if (answer.menu === "Add-Engineer") {
            engineerPrompt()
                .then(answer => {
                    const engineer = new Engineer(answer)
                    engineerInformation = engineer
                    console.table(engineer)
                })
        }
    })
    .then(menuPrompt)
    .then(answer => {
        if (answer.menu === "Add-Intern") {
            internPrompt()
                .then(answer => {
                    const intern = new Intern(answer)
                    internInformation = intern
                    console.table(intern)
                })
                .then(menuPrompt)

        }
    })
// create a finish team section?











/*
    .then(answer => {
        let manager = new Manager(answer)
        Managers = manager
        console.table(manager)
        console.log(manager.answer)
    })
    
    .then(menuPrompt)
    .then(answer => {
        if (answer.menu === "Add-Employee") {
            employeePrompt()
                .then(answer => {
                    const employee = new Employee(answer)
                    employeeInformation = employee
                    console.table(employee)
                })
                .then(menuPrompt)
                .then(answer => {
                    if (answer.menu === "Add-Engineer") {
                        engineerPrompt()
                            .then(answer => {
                                const engineer = new Engineer(answer)
                                engineerInformation = engineer
                                console.table(engineer)
                            })
                            .then(menuPrompt)
                            .then(answer => {
                                if (answer.menu === "Add-Intern") {
                                    internPrompt()
                                        .then(answer => {
                                            const intern = new Intern(answer)
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
    })*/