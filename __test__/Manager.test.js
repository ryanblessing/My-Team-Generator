const Manager = require("../lib/Manager");

test('Create a manager object', () => {
    const manager = new Manager();
    
    expect(typeof(manager)).toBe('object')

});

test('To get managers office number', () => {
    const officeNumber = '1'
    const manager = new Manager(officeNumber)

    expect(manager.officeNumber).toBe(officeNumber)
})
