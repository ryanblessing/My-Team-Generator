const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school = '') {
        super(school)
        this.school = school
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern