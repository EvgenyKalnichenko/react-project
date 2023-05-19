import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar)}>
            <div className="container">
                <ThemeSwitcher />
                <div className={classNames(cls.navbar__list, {}, [className])}>
                    <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.navbar__link)} to={'/'}>Главная</AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.navbar__link)} to={'/about'}>О сайте</AppLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
