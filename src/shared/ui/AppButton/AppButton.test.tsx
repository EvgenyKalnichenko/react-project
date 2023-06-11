import { render, screen } from '@testing-library/react';
import AppButton, { ThemeButton } from 'shared/ui/AppButton/AppButton';

describe('AppButton', () => {
    test('test render AppButton', () => {
        render(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('test clear theme', () => {
        render(<AppButton theme={ThemeButton.CLEAR}>TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveClass(ThemeButton.CLEAR);
        screen.debug();
    });
});
