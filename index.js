const inquirer = require('inquirer');

const fs = require('fs');
const generateHtml = require('./src/template.js');
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
            name: 'managerName',
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
            name: 'managerId',
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
            name: 'managerEmail',
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



const menuPrompt = () => {
    console.log(`
    =================
    Add your Team!
    =================
    `);
    if (!menuPrompt.answer) {
        menuPrompt.answer = [];
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
            name: 'engineerName',
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
            message: 'What is your Engineers work Id number?(required)',
            choices: ["1", "2", "3", "4", "5"],
            validate: engineerId => {
                if (engineerId) {
                    return true;
                } else {
                    console.log('Please enter your work ID number')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is your Engineers Email address?'
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is your Engineers gitHub link?',
            validate: EngineerGitHub => {
                if (EngineerGitHub) {
                    return true;
                } else {
                    console.log("Please enter a valid Github Account")
                    return false;
                }
            }
        }
    ])
}
const employeePrompt = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'employeeName',
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
            message: 'What is your employees work Id number?',
            choices: ["1", "2", "3", "4", "5"],
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your work ID number')
                    return false;
                }
            }
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
            name: 'internName',
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
            message: 'What is your interns work Id number?',
            choices: ["1", "2", "3", "4", "5"],
            validate: internId => {
                if (internId) {
                    return true;
                } else {
                    console.log('Please enter your work ID number')
                    return false;
                }
            }
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

/*managerPrompt();
{
    if(answer === "Add-Engineer"){
        return engineerPrompt();
    } if(answer === "Add-Intern") {
        return internPrompt();
    } if(answer === "Add-Employee") {
        return employeePrompt();
    } if(answer === "Finished") {
        return finishedPrompt();
    } else {
        return menuPrompt();
    }
}
*/

managerPrompt()
    .then(answer => {
        let manager = new Manager(answer)
        managerInfo = manager
        console.log(manager)
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
                                            let intern = new Intern(answer)
                                            internInfo = intern
                                            console.log(intern)
                                        })
                                        .then(menuPrompt)
                                        .then(answer => {
                                            if (answer.menuPrompt === "Finished"); {
                                                finishedPrompt()
                                                    .then(answer => {
                                                        if (answer) {
                                                            writeFile();
                                                            return true;
                                                        } else {
                                                            menuPrompt();
                                                            return false;
                                                        }
                                                    })
                                            }
                                        })
                                }
                            })
                    }
                })
        }
    })
    .catch(err => {
        console.log(err);
    });

const writeFile = () => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', answer, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'file created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Files copied!'
            });
        });
    });
};




    
    


module.exports = {
    writeFile,
    copyFile
};