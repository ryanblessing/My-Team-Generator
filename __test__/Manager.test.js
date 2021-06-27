const Manager = require("../lib/Manager");

test('Create a manager object', () => {
    const position = "Manager"
    const manager = new Manager("ryan", 1, "ryan21");
    
    expect(manager.getRole()).toBe(position)

});

test('To get managers office number', () => {
    const officeNumber = '1'
    const manager = new Manager("ryan", 1, "ryan21", officeNumber)

    expect(manager.officeNumber).toBe(officeNumber)
})
