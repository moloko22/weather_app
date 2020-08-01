import React from 'react';
import './Main.css';
import AboutPage from "../../Pages/AboutPage/AboutPage";
import HomePage from "../../Pages/HomePage/HomePage";
import SelectedCityPage from "../../Pages/SelectedCityPage/SelectedCityPage";

const Main = () => {
    return (
        <main className={'main'}>
            <HomePage/>
            <SelectedCityPage/>
            <AboutPage/>
        </main>
    );
};

export default Main;