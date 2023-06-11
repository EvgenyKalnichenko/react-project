import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import AppButton, { ThemeButton } from 'shared/ui/AppButton/AppButton';
import cls from './ThemeSwitcher.module.scss';
import ToggleIcon from './toggle-theme.svg';

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    return (
        <AppButton
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            <ToggleIcon onClick={toggleTheme} />
        </AppButton>
    );
};

export default ThemeSwitcher;
