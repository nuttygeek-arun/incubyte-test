const addFunction = require('./app');

describe('String calculator', () => {
    it('should return the sum of string values', () => {
        const val = addFunction('7,8');
        expect(val).toBe(15);
    })

    it('should return 0 when empty string is provided', () => {
        const val = addFunction('');
        expect(val).toBe(0);
    })
})