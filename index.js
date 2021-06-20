const inquirer = require('inquirer');

const fs = require('fs');
const generateTemplate = require('./src/template.js');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
//const Verifier = require("email-verifier");

/*let verifier = new Verifier("at_DYUf5lcZvGyBFyXeDiJHabF6uSpPi");
verifier.verify("r@rdegges.com", (err, data) => {
    if (err) throw err;
    console.log(data);
});
*/

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
};



const menuPrompt = (answer) => {
    console.log(`
    =================
    Add your Team!
    =================
    `);
    if (answer = answer.length) {
        answer.length = [];
    }
    return inquirer.prompt([{
        type: 'list',
        name: 'menu',
        message: 'Please choose from the following options',
        choices: ["Add-Engineer", "Add-Employee", "Add-Intern", "Finished"],
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log("please choose one of the following options");
                return false;
            }
        }
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
            name: 'engineerId',
            message: 'What is your Engineers work Id number?(required)'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is your Engineers Email address?'
        },
        {
            type: 'input',
            name: 'engineerGithub',
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
            name: 'employeeId',
            message: 'What is your employees work Id number?'
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'What is your employees email address?'
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
            name: 'internId',
            message: 'What is your interns work Id number?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is your interns Email address?'
        },
        {
            type: 'input',
            name: 'InternSchool',
            message: 'What is your interns current school?'
        }
    ])
}

const finishedPrompt = () => {
    return inquirer.prompt([{
        type: 'confirm',
        name: 'addEmployee',
        message: 'Are you sure you are finished?',
        default: true
    }])
}



managerPrompt()
    .then(answer => {
        let manager = new Manager(answer)
       // managerInfo = manager
        console.log(manager)
        console.table(manager)
    })

    .then(menuPrompt)
    .then(answer => {
            if (answer.menuPrompt === "Add-Engineer"); {
                engineerPrompt()
                    .then(answer => {
                        let engineer = new Engineer(answer)
                        engineerInfo = engineer
                        console.log(engineer)
                    })
                    .then(menuPrompt)
                    .then(answer => {
                        if (answer.menuPrompt === "Add-Employee"); {
                            employeePrompt()
                                .then(answer => {
                                    let employee = new Employee(answer)
                                    employeeInfo = employee
                                    console.log(employee)
                                })
                                .then(menuPrompt)
                                .then(answer => {
                                    if (answer.menuPrompt === "Add-Intern"); {
                                        internPrompt()
                                            .then(answer => {
                                                let intern = new intern(answer)
                                                internInfo = intern
                                                console.log(intern)
                                            })
                                            .then(menuPrompt)
                                            .then(answer => {
                                                if (answer.menuPrompt === "Finished"); {
                                                    finishedPrompt()
                                                    if (answer.menuPrompt) {
                                                        generateTemplate(managerInfo, engineerInfo, employeeInfo, internInfo)
                                                        fs.watchFile('index.html', generateTemplate(managerInfo, engineerInfo, employeeInfo, internInfo), err => {
                                                            if (err) throw err;
                                                        })
                                                    }
                                                }
                                            })
                                    }
                                })
                            }}
                    )}
                    })
                    .catch(err => {
                        console.log(err);
                      });

