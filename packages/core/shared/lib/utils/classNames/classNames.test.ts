import { classNames, Mods } from './classNames';

describe('classNames', () => {
    it('should return a string with the base class name', () => {
        expect(classNames('test')).toBe('test');
    });

    it('should return a string with the base class name and additional class names from an array', () => {
        const classNamesArray = [
            'test1',
            'test2',
            'test3', 
        ];

        const result = classNamesArray.join(' ');

        expect(classNames('', {}, classNamesArray)).toBe(result);
    });

    it('should return a string with the base class name and additional class names from an object filtered by boolean values', () => {
        const className = 'test1';
        const classNamesObj: Mods = {
            test2: true,
            test3: false,
            test4: true,
        };

        const result = `${className} ${Object.keys(classNamesObj).filter(key => classNamesObj[key]).join(' ')}`

        expect(classNames(className, classNamesObj, [])).toBe(result);
    });

    it('should return a string with the base class name and additional class names from an array and an object filtered by boolean values', () => {
        const className = 'test1';
        const classNamesObj: Mods = {
            test2: true,
            test3: false,
            test4: true,
        };
        const classNamesArray = [
            'test5',
            'test6',
            'test7', 
        ];

        const result = `${className} ${Object.keys(classNamesObj).filter(key => classNamesObj[key]).join(' ')} ${classNamesArray.join(' ')}`

        expect(classNames(className, classNamesObj, classNamesArray)).toBe(result);
    });
});
