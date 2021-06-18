const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager.js");

test('Create a manager object', () => {
    const manager = new Manager('');

    expect(manager.name).toBe('');
    expect(manager.id).toBeGreaterThanOrEqual(0);
    expect(manager.email).toBe("manager1@yahoo.com");
    expect(manager.officeNumber).toBeGreaterThanOrEqual(0);
})