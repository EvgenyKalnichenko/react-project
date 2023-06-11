import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import AppButton from 'shared/ui/AppButton/AppButton';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <AppButton
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
            >
                toggle
            </AppButton>
            <div className={classNames(cls.Sidebar__switchers)}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
