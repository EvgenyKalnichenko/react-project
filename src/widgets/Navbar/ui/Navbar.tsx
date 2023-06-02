import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import LangSwitcher from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar)}>
            <div className={classNames(cls.navbar__container)}>
                <LangSwitcher />
                <div className={classNames(cls.navbar__list, {}, [className])}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        className={classNames(cls.navbar__link)}
                        to="/"
                    >
                        {t('Главная')}
                    </AppLink>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        className={classNames(cls.navbar__link)}
                        to="/about"
                    >
                        {t('О сайте')}
                    </AppLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
