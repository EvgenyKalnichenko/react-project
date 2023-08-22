import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getUserAuthData, userActions } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';
import AppButton, { ThemeButton } from 'shared/ui/AppButton/AppButton';
import { LoginModal } from 'features/AuthByUserName';
import NavbarItem from './NavbarItem/NavbarItem';
import { sidebarItemsList } from '../model/items';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
    collapsed?: boolean
}

const Navbar = ({ className, collapsed }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={classNames(cls.navbar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={classNames(cls.navbar__container)}>
                <ul className={classNames(cls.navbar__list, {}, [])}>
                    {
                        sidebarItemsList.map((item) => (
                            <li key={item.path}>
                                <NavbarItem
                                    item={item}
                                    className={classNames(cls.navbar__link, {}, [])}
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
            {authData?.username ? (
                <AppButton
                    onClick={onLogout}
                    theme={ThemeButton.OUTLINE_INVERTED}
                >
                    {t('Выйти')}
                </AppButton>
            ) : (
                <div>
                    <AppButton
                        onClick={() => setIsAuthModal(true)}
                        theme={ThemeButton.OUTLINE_INVERTED}
                    >
                        {t('Войти')}
                    </AppButton>
                    {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)} />}
                </div>
            )}
        </div>
    );
};

export default Navbar;
