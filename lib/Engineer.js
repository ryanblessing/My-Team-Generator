const Employee = require("./Employee");

// super and extends help me bring over the employee class and
// add office number too it for said manager
class Engineer extends Employee {
    constructor(gitHub = '') {
        super(gitHub)
        this.gitHub = gitHub
    }

getGitHub() {
    return this.gitHub;
}
}



module.exports = Engineer
