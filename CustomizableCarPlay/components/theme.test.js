
import theme from './theme';

describe('change color object', () => {
    test('includes light and dark', () => {
        expect(theme).toHaveProperty('light');
        expect(theme).toHaveProperty('dark');

    });

    test('light theme contains the correct properties', () => {
        expect(theme.light).toHaveProperty('theme','light');
        expect(theme.light).toHaveProperty('color','black');
        expect(theme.light).toHaveProperty('background','white');

    });

    test('dark theme contains the correct properties', () => {
        expect(theme.dark).toHaveProperty('theme','dark');
        expect(theme.dark).toHaveProperty('color','white');
        expect(theme.dark).toHaveProperty('background','black');

    });

});