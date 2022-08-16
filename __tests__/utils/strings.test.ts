import {thousandSeparator} from "../../src/utils/strings";

describe('Testing thousandSeparator func', () => {
    it('input numeric string', () => {
        const input = '1000000'
        const parsed = thousandSeparator(input);
        expect(parsed).toBe('1.000.000')
    });

    it('input number', () => {
        const input = 1000000
        const parsed = thousandSeparator(input);
        expect(parsed).toBe('1.000.000')
    });
});
