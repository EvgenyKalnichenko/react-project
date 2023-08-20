import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './AppButton.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ThemeButton,
    size?: ButtonSize,
    isDisabled?: boolean,
}

const AppButton: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        isDisabled = false,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.disabled]: isDisabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [className])}
            disabled={isDisabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default AppButton;
