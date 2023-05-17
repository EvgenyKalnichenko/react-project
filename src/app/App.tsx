import React from "react";
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPageAsync} from "pages/AboutPage";
import {MainPageAsync} from "pages/MainPage";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className= {classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;
