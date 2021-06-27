const Engineer = require("../lib/Engineer");

test('Create a Engineer object', () => {
    const position = "Engineer"
    const engineer = new Engineer("ryan", 1, "ryan21");

    expect(engineer.getRole()).toBe(position)
});

test('To get Engineers GitHub account', () => {
    const gitHub = 'github1'
    const engineer = new Engineer("ryan", 1, "ryan21", gitHub)


    expect(engineer.gitHub).toBe(gitHub)
})
