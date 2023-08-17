import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AppButton, { ThemeButton } from 'shared/ui/AppButton/AppButton';
import { LoginModal } from 'features/AuthByUserName';
import cls from './Navbar.module.scss';
import HomeIcon from './icon/Home.svg';
import InfoIcon from './icon/Info.svg';

interface NavbarProps {
    className?: string
    collapsed?: boolean
}

const Navbar = ({ className, collapsed }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    return (
        <div className={classNames(cls.navbar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={classNames(cls.navbar__container)}>
                <ul className={classNames(cls.navbar__list, {}, [])}>
                    <li>
                        <AppLink
                            theme={AppLinkTheme.SECONDARY}
                            className={classNames(cls.navbar__link)}
                            to={RoutePath.main}
                        >
                            <HomeIcon />
                            <span>{t('Главная')}</span>
                        </AppLink>
                    </li>
                    <li>
                        <AppLink
                            theme={AppLinkTheme.SECONDARY}
                            className={classNames(cls.navbar__link)}
                            to={RoutePath.about}
                        >
                            <InfoIcon />
                            <span>{t('О сайте')}</span>
                        </AppLink>
                    </li>
                </ul>
            </div>
            <AppButton
                onClick={() => setIsAuthModal(true)}
                theme={ThemeButton.OUTLINE_INVERTED}
            >
                {t('Войти')}
            </AppButton>
            <LoginModal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)} />
        </div>
    );
};

export default Navbar;
