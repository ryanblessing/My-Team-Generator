const Employee = require("./Employee.js");

// super and extends help me bring over the employee class and
// add office number too it for said manager
class Manager extends Employee {
    constructor(officeNumber = '') {
        super(officeNumber)
        this.officeNumber = officeNumber
    }

getOfficeNumber() {
    return this.officeNumber;
}
}



module.exports = Manager