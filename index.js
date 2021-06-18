const inquirer = require('inquirer');

//const fs = require('fs');
//const generateTemplate = require('./src/template.js');
//const employee = require('./lib/Employee.js');
//const engineer = require('./lib/Engineer.js');
//const intern = require('./lib/Intern.js');
//const Manager = require('./lib/Manager.js');


employee = "",
engineer = "",
inter = ""
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
    if ( answer = answer.length ) {
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
            message: 'What is your Engineers work Id number?(required'
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
    .then(menuPrompt)
    //meed to break up to make a if statement i think?
    .then(answer => {
        if (answer === "Add-Employee", employeePrompt()) {
            let employee = new Employee(answer)
            employeeInfo = employee
            console.table(employee)
        }
    })



    .then(menuPrompt)
    .then(answer => {
        if (answer === "Add-Intern", internPrompt()) {
            then(answer => {
                let intern = new Intern(answer)
                internInformation = intern
                console.table(intern)
            })
        } 
    })
    .then(menuPrompt)
    .then(answer => {
        if (answer === "Add-Engineer", engineerPrompt()) {
            then(answer => {
                let engineer = new Engineer(answer)
                engineerInformation = engineer
                console.table(engineer)
            })
        }
    })
    .then(menuPrompt)
    .catch(err => {
        console.log(err);
    });








/*if (teamData === "Add-Engineer") {
    engineerPrompt()
    return true;
} else if (
    teamData === "Add-Employee") {
    employeePrompt()
    return true;
} else if (
    teamData === "Add-Intern") {
    internPrompt()
    return true;
} else if (
    teamData === "Finished"
) {
    finishedPrompt()
    return true;
} else {
    return false;
}
*/






// create a finish team section?*/