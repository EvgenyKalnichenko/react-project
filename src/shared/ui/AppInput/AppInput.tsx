import { classNames } from 'shared/lib/classNames/classNames';
import {
    InputHTMLAttributes, useState, memo, ChangeEvent, useEffect, useRef,
} from 'react';
import cls from './AppInput.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface AppInputProps extends HTMLInputProps {
    className?: string,
    error?: string,
    label?: string,
    value?: string,
    autofocus?: boolean,
    onChange?: (value: string) => void
}

export const AppInput = memo((props: AppInputProps) => {
    const {
        className,
        onChange,
        error,
        label,
        autofocus = false,
        type = 'text',
        ...otherProps
    } = props;

    const [isFocus, setIsFocus] = useState<boolean>(false);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const ref = useRef<HTMLInputElement>();

    useEffect(() => {
        if (autofocus) {
            setIsFocus(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames('', {}, [className])}>
            {label && (
                <div className={cls.label}>{label}</div>
            )}
            <input
                ref={ref}
                type={type}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={onChangeHandler}
                className={classNames(cls.input, {
                    [cls.input__focus]: isFocus,
                    [cls.input__error]: error,
                }, [])}
                {...otherProps}
            />
            {error && (
                <div className={cls.error}>{error}</div>
            )}
        </div>
    );
});

export default AppInput;
