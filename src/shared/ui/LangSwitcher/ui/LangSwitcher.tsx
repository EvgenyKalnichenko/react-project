import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import AppButton, { ButtonSize, ThemeButton } from 'shared/ui/AppButton/AppButton';

interface LangSwitcherProps {
    className?: string
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <AppButton
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            size={ButtonSize.L}
            onClick={toggle}
        >
            {t('Язык')}
        </AppButton>
    );
};

export default LangSwitcher;
