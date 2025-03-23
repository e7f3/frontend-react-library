import { isPartOfEnum } from './isPartOfEnum';

enum TestEnum {
    A = 'A',
    B = 'B',
    C = 'C'
}

describe('isPartOfEnum', () => {
    it('should return true if the value is part of the enum', () => {
        const result = isPartOfEnum('A', TestEnum);
        expect(result).toBeTruthy();
    });

    it('should return false if the value is not part of the enum', () => {
        const result = isPartOfEnum('D', TestEnum);
        expect(result).toBeFalsy();
    });
});
