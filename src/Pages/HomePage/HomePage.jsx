import React, {useEffect} from 'react';
import './HomePage.css';

const HomePage = (props) => {
    const {
        geolocation,
        city,
        changeCity,
        weather,
        getWeather,
        getGeoFromLS,
        saveGeoToLS,
    } = props;

    const geoSuccess = (pos) => {
        return saveGeoToLS({longitude: pos.coords.longitude, latitude: pos.coords.latitude})

    };

    const geoError = (err) => {
        return
    };

    const getGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };

    useEffect(() => {
        getGeoFromLS();
        if(!geolocation.latitude || !geolocation.longitude){
            getGeoLocation();
        }
    }, [geolocation.longitude, geolocation.latitude, getGeoLocation, getGeoFromLS]);

    return (
        <div>
            <h3>home</h3>
        </div>
    );
};

export default HomePage;