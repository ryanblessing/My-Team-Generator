const Intern = require("../lib/Intern.js");

test('Create a Intern object', () => {
    const intern = new Intern();

    expect(typeof(intern)).toBe('object')
});

test('test to get interns school', () => {
    const school = 'Vanderbilt'
    const intern = new Intern(school)


    expect (intern.school).toBe(school)
})