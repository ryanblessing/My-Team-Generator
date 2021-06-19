const Employee = require("../lib/Employee");

test('test create new employee', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object')
})

test('set name', () => {
    const name = 'Ryan'

    const employee = new Employee(name)

    expect(employee.name).toBe(name)
})