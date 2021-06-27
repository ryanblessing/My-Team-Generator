const Employee = require("./Employee.js");

// super and extends help me bring over the employee class and
// add office number too it for said manager
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getRole() {
        return 'Manager'
    }

getOfficeNumber() {
    return this.officeNumber;
}
}



module.exports = Manager