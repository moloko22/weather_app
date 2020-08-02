import React from 'react';
import './App.css';
import {history} from './_helpers/history';
import {connect} from "react-redux";
import {Router} from 'react-router-dom';
import {getGeoLocationFromLocalStorage, saveGeoLocationToLocalStorage} from "./store/actions/weather";
import {changeCity, getWeather} from "./store/actions/weather";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App(props) {
    const {
        geolocation,
        getGeoFromLS,
        saveGeoToLS,
        changeCity,
        redirect,
        weather,
        city,
        getWeather,
    } = props;

    return (
        <Router history={history}>
            <section className={'app'}>
                <Header city={city}
                />
                <Main city={city}
                      geolocation={geolocation}
                      getGeoFromLS={getGeoFromLS}
                      saveGeoToLS={saveGeoToLS}
                      getWeather={getWeather}
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
    geolocation: store.weather.geolocation,
});

const mapDispatchToProps = dispatch =>({
    changeCity: (city) => dispatch(changeCity(city)),
    redirect: (method, nextUrl) => dispatch({type: 'ROUTING', payload: {method, nextUrl}}),
    getWeather: (data) => dispatch(getWeather(data)),
    saveGeoToLS: (data) => dispatch(saveGeoLocationToLocalStorage(data)),
    getGeoFromLS: () => dispatch(getGeoLocationFromLocalStorage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);