import {RouteProps} from "react-router-dom";
import MainPage from "pages/MainPage/ui/MainPage";
import AboutPage from "pages/AboutPage/ui/AboutPage";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps & { name: string }> = {
    [AppRoutes.MAIN]: {
        name: 'Главная',
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        name: 'О сайте',
        path: RoutePath.about,
        element: <AboutPage />
    }
}
