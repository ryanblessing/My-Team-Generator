const Intern = require("../lib/Intern.js");

test('Create a Intern object', () => {
    const position = "Intern"
    const intern = new Intern("ryan", 1, "ryan21");

    expect(intern.getRole()).toBe(position)
});

test('test to get interns school', () => {
    const school = 'Vanderbilt'
    const intern = new Intern('Ryan', 1, "ryan21", school)


    expect(intern.school).toBe(school)
})
