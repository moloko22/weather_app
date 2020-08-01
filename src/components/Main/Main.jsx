import React from 'react';
import './Main.css';
import {Route, Switch} from "react-router-dom";
import {ROUTES} from "../../constants/routes";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import HomePage from "../../Pages/HomePage/HomePage";
import SelectedCityPage from "../../Pages/SelectedCityPage/SelectedCityPage";

const Main = (props) => {
    const {
        city,
        redirect,
        weather,
        changeCity,
    } = props;
    return (
        <main className={'main'}>
                <Switch>
                    <Route exact path={ROUTES.HOME} component={() => <HomePage city={city}
                                                                               weather={weather}
                                                                               changeCity={changeCity}

                    />}/>
                    <Route path={ROUTES.SELECTED_CITY} component={() => <SelectedCityPage city={city}
                                                                                        redirect={redirect}
                                                                                        weather={weather}
                                                                                        changeCity={changeCity}
                    />}/>
                    <Route path={ROUTES.ABOUT} component={() => <AboutPage/>}/>
                </Switch>
        </main>
    );
};

export default Main;