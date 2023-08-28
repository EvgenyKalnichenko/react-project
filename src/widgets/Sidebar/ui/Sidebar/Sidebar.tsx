import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import AppButton, { ButtonSize, ThemeButton } from 'shared/ui/AppButton/AppButton';
import { Navbar } from 'widgets/Navbar';
import LangSwitcher from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

const Sidebar = memo(({ className = '' }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Navbar collapsed={collapsed} />
            <AppButton
                data-testid="sidebar-toggle"
                type="button"
                theme={ThemeButton.BACKGROUND_INVERTED}
                className={classNames(cls.Sidebar__collapseBtn)}
                onClick={onToggle}
                size={ButtonSize.XL}
            >
                {collapsed ? '>' : '<'}
            </AppButton>
            <div className={classNames(cls.Sidebar__switchers)}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
});

export default Sidebar;
