const addFunction = require('./app');

describe('String calculator', () => {
    it('should return the sum of string values', () => {
        const val = addFunction('7,8');
        expect(val).toBe(15);
    })
})