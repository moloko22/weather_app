import React from 'react';
import './Main.css';
import {Route, Switch, Redirect} from "react-router-dom";
import {ROUTES} from "../../constants/routes";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import HomePage from "../../Pages/HomePage/HomePage";
import SelectedCityPage from "../../Pages/SelectedCityPage/SelectedCityPage";

const Main = (props) => {
    const {
        geolocation,
        getGeoFromLS,
        saveGeoToLS,
        city,
        redirect,
        weather,
        getWeather,
        changeCity,
    } = props;
    return (
        <main className={'main'}>
                <Switch>
                    <Route exact path={ROUTES.HOME} component={() => <HomePage city={city}
                                                                               geolocation={geolocation}
                                                                               getGeoFromLS={getGeoFromLS}
                                                                               saveGeoToLS={saveGeoToLS}
                                                                               getWeather={getWeather}
                                                                               weather={weather}
                                                                               changeCity={changeCity}

                    />}/>
                    <Route path={ROUTES.SELECTED_CITY} component={() => <SelectedCityPage city={city}
                                                                                          redirect={redirect}
                                                                                          weather={weather}
                                                                                          changeCity={changeCity}
                    />}/>
                    <Route path={ROUTES.ABOUT} component={() => <AboutPage/>}/>
                    <Redirect from={ROUTES.UNDEFINED} to={ROUTES.HOME} />
                </Switch>
        </main>
    );
};

export default Main;