import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import AppButton from 'shared/ui/AppButton/AppButton';
import AppInput from 'shared/ui/AppInput/AppInput';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            <AppInput className={cls.input} placeholder={t('Ваше имя')} autofocus />
            <AppInput className={cls.input} placeholder={t('Ваш пароль')} />
            <AppButton className={cls.loginBtn} type="submit">
                {t('Войти') }
            </AppButton>
        </form>
    );
};
