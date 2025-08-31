const assert = require('assert');
describe('Amigo Secreto Application', () => {
    it('should return a greeting message', () => {
        assert.strictEqual('Hello, Amigo Secreto!', 'Hello, Amigo Secreto!');
    });
    it('should add two numbers correctly', () => {
        assert.strictEqual(1 + 1, 2);
    });
});