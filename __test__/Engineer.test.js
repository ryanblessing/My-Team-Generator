const Engineer = require("../lib/Engineer");

test('Create a Engineer object', () => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe('object')
});

test('To get Engineers GitHub account', () => {
    const gitHub = 'github1'
    const engineer = new Engineer(gitHub)


    expect(engineer.gitHub).toBe(gitHub)
})