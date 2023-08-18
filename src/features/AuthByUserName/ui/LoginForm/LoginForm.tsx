import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import AppButton from 'shared/ui/AppButton/AppButton';
import AppInput from 'shared/ui/AppInput/AppInput';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        dispatch((loginByUsername({ username, password })));
    }, [dispatch, username, password]);

    return (
        <form
            className={classNames(cls.LoginForm, {}, [className])}
            onSubmit={onSubmit}
        >
            <Text title={t('Войти')} theme={TextTheme.PRYMARY} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <AppInput
                className={cls.input}
                autofocus
                placeholder={t('Ваше имя')}
                value={username}
                onChange={onChangeUsername}
            />
            <AppInput
                className={cls.input}
                placeholder={t('Ваш пароль')}
                value={password}
                onChange={onChangePassword}
            />
            <AppButton className={cls.loginBtn} type="submit" isDisabled={isLoading}>
                {t('Войти') }
            </AppButton>
        </form>
    );
};
