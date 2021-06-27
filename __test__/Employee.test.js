const Employee = require("../lib/Employee");

test('test create new employee', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object')
});

test('set name', () => {
    const name = 'Ryan';
    const employee = new Employee(name, "1", "ryan@1")

    expect(employee.getName()).toBe(name)
});

test('set employee Id', () => {
    const id = '1';
    const employee = new Employee('Ryan', id, "ryan21")

    expect(employee.getId()).toBe(id)
});

test('set Employee email address', () => {
    const email = 'ryan@yahoo.com'
    const employee = new Employee('Ryan', "1", email)

    expect(employee.getEmail()).toBe(email)
});

test('To set the employees role in company', () => {
    const position = "Employee"
    const employee = new Employee("ryan", "1", "ryan@1")

    expect(employee.getRole()).toBe(position)
});