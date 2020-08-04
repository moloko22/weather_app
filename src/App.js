import React, {useEffect} from 'react';
import './App.css';
import {history} from './_helpers/history';
import {connect} from "react-redux";
import {Router} from 'react-router-dom';
import {
    changeCity,
    getWeather,
    getGeoLocation,
    timeTravelBackward
} from "./store/actions/weather";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App(props) {
    
    const {
        changeCityFN,
        getWeatherFN,
        getGeoLocationFN,
        geolocation,
        city,
        timeTravelBack,
        redirect,
        weather,
    } = props;

    useEffect(() => {
        if(!geolocation.latitude || !geolocation.longitude){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((Position) => getGeoLocationFN(Position));
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        }
    }, [city, geolocation, geolocation.longitude, geolocation.latitude, getGeoLocationFN]);

    return (
        <Router history={history}>
            <section className={'app'}>
                <Header />
                <Main city={city}
                      timeTravelBackward={timeTravelBack}
                      geolocation={geolocation}
                      getWeather={getWeatherFN}
                      redirect={redirect}
                      weather={weather}
                      changeCity={changeCityFN}
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
    changeCityFN: (city) => dispatch(changeCity(city)),
    redirect: (method, nextUrl) => dispatch({type: 'ROUTING', payload: {method, nextUrl}}),
    getWeatherFN: (data, obj) => dispatch(getWeather(data, obj)),
    timeTravelBack: () => dispatch(timeTravelBackward()),
    getGeoLocationFN: (data) => dispatch(getGeoLocation(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);