import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/navbar/Home.svg';
import AboutIcon from 'shared/assets/icons/navbar/Info.svg';
import ProfileIcon from '../../../shared/assets/icons/navbar/Avatar.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const sidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: HomeIcon,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
    },
];
