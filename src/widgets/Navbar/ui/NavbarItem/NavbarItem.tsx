import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React, { memo } from 'react';
import { SidebarItemType } from 'widgets/Navbar/model/items';

interface NavbarItemProps {
    className?: string,
    item: SidebarItemType
}

const NavbarItem = memo(({ item, className }: NavbarItemProps) => (
    <AppLink
        theme={AppLinkTheme.SECONDARY}
        className={className}
        to={item.path}
    >
        <item.Icon />
        <span>{item.text}</span>
    </AppLink>
));

export default NavbarItem;
