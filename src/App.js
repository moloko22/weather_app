import React from 'react';
import './App.css';
import {history} from './_helpers/history';
import {connect} from "react-redux";
import {Router} from 'react-router-dom';
import {changeCity} from "./store/actions/weather";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App(props) {
    const {
        changeCity,
        redirect,
        weather,
        city,
    } = props;

    return (
        <Router history={history}>
            <section className={'app'}>
                <Header city={city}
                />
                <Main city={city}
                      redirect={redirect}
                      weather={weather}
                      changeCity={changeCity}
                />
                <Footer
                />
            </section>
        </Router>
  );
}

const mapStateToProps = store => ({
    weather: store.weather.weather,
    city: store.weather.selectedCity,
});

const mapDispatchToProps = dispatch =>({
    changeCity: (city) => dispatch(changeCity(city)),
    redirect: (method, nextUrl) => dispatch({type: 'ROUTING', payload: {method, nextUrl}}),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);