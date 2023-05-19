import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {useTheme} from "app/providers/ThemeProvider";
import ToggleIcon from './toggle-theme.svg'
import AppButton, {ThemeButton} from "shared/ui/AppButton/ui/AppButton";

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    return (
        <>
            <AppButton
                className={classNames(cls.ThemeSwitcher, {}, [className])}
                onClick={toggleTheme}
                theme={ThemeButton.CLEAR}
            >
                <ToggleIcon onClick={toggleTheme} />
            </AppButton>
        </>
    );
};

export default ThemeSwitcher;
