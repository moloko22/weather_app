import React from 'react';
import './Main.css';
import {Route, Switch} from "react-router-dom";
import {ROUTES} from "../../constants/routes";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import HomePage from "../../Pages/HomePage/HomePage";
import SelectedCityPage from "../../Pages/SelectedCityPage/SelectedCityPage";
import {PrivateRoute} from "../../_helpers/privateRoute";

const Main = () => {
    return (
        <main className={'main'}>
                <Switch>
                    <Route exact path={ROUTES.HOME} component={() => <HomePage />}/>
                    <PrivateRoute path={ROUTES.SELECTED_CITY}
                                  component={() => <SelectedCityPage/>}
                                  data={false}
                    />
                    <Route path={ROUTES.ABOUT} component={() => <AboutPage/>}/>
                </Switch>
        </main>
    );
};

export default Main;