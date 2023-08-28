import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('testClass')).toBe('testClass');
    });

    test('with additional class', () => {
        const expected = 'testClass class class-name';
        expect(classNames('testClass', {}, ['class', 'class-name']))
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'testClass class class-name hovered scrollable';
        expect(classNames(
            'testClass',
            { hovered: true, scrollable: true },
            ['class', 'class-name'],
        )).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'testClass class class-name hovered';
        expect(classNames(
            'testClass',
            { hovered: true, scrollable: false },
            ['class', 'class-name'],
        )).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'testClass class class-name hovered';
        expect(classNames(
            'testClass',
            {
                hovered: true,
                scrollable: false,
            },
            ['class', 'class-name'],
        )).toBe(expected);
    });
});
