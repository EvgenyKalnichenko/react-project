import { classNames } from 'shared/lib/classNames/classNames';
import {
    InputHTMLAttributes, useState, memo, ChangeEvent,
} from 'react';
import cls from './AppInput.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface AppInputProps extends HTMLInputProps {
    className?: string,
    error?: string,
    label?: string,
    value?: string,
    onChange?: (value: string) => void
}

const AppInput = memo((props: AppInputProps) => {
    const {
        className,
        onChange,
        error,
        label,
        type = 'text',
        ...otherProps
    } = props;

    const [isFocus, setIsFocus] = useState<boolean>(false);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={
            classNames(
                cls.AppInput,
                { [cls.AppInput__error]: error, [cls.AppInput__focus]: isFocus },
                [className],
            )
        }
        >
            {label && (
                <div className={cls.label}>{label}</div>
            )}
            <input
                type={type}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={onChangeHandler}
                className={classNames(cls.input, { }, [])}
                {...otherProps}
            />
            {error && (
                <div className={cls.error}>{error}</div>
            )}
        </div>
    );
});

export default AppInput;
