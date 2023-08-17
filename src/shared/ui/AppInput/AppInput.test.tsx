import { render, screen } from '@testing-library/react';
import AppInput from './AppInput';

describe('AppInput', () => {
    test('test render AppInput', () => {
        render(<AppInput value="Тестовый текст" />);
        expect(screen.getByDisplayValue('Тестовый текст')).toBeInTheDocument();
    });
});
