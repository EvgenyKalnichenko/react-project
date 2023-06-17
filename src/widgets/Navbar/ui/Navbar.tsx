import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Modal } from 'shared/ui/Modal/Modal';
import AppButton, { ThemeButton } from 'shared/ui/AppButton/AppButton';
import cls from './Navbar.module.scss';
import HomeIcon from './icon/Home.svg';
import InfoIcon from './icon/Info.svg';

interface NavbarProps {
    className?: string
    collapsed?: boolean
}

const Navbar = ({ className, collapsed }: NavbarProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames(cls.navbar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={classNames(cls.navbar__container)}>
                <div className={classNames(cls.navbar__list, {}, [])}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        className={classNames(cls.navbar__link)}
                        to={RoutePath.main}
                    >
                        <HomeIcon />
                        <span>{t('Главная')}</span>
                    </AppLink>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        className={classNames(cls.navbar__link)}
                        to={RoutePath.about}
                    >
                        <InfoIcon />
                        <span>{t('О сайте')}</span>
                    </AppLink>
                </div>
            </div>
            <AppButton
                onClick={() => setIsOpen(true)}
                theme={ThemeButton.OUTLINE_INVERTED}
            >
                {t('Войти')}
            </AppButton>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {/* eslint-disable-next-line */}
                <p>Тут будет авторизация</p>
            </Modal>
        </div>
    );
};

export default Navbar;
