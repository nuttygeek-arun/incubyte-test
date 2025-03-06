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

    it('should saperate values by , and \n both', () => {
        const val = addFunction('8,9\n6');
        expect(val).toBe(23);
    })

    it('should saperate values by custom delimiter', () => {
        const val = addFunction('//::\n5::7::9::6');
        expect(val).toBe(27);
    })

    it('should saperate values by custom delimiter &&', () => {
        const val = addFunction('//&&\n5&&7&&9&&1');
        expect(val).toBe(22);
    })

    it('should saperate values by custom delimiter ^', () => {
        const val = addFunction('//^\n1^4^5^4');
        expect(val).toBe(14);
    })

    it('should saperate values by ,', () => {
        const val = addFunction('4,8,9,6,7,8,9');
        expect(val).toBe(51);
    })

})