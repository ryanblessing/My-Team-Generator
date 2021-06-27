const Employee = require("./Employee");

// super and extends help me bring over the employee class and
// add office number too it for said manager
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub
        
    }
        
getRole(){
        return 'Engineer';
    }

getGitHub() {
    return this.gitHub;
}


}



module.exports = Engineer
