import {API_URL, API_KEY} from "../../api/weather_api";

export const getGeoLocationFromLocalStorage = () => dispatch => {
    if(localStorage.getItem('weather')){
        const geolocation = localStorage.getItem('weather');
        return dispatch({type: 'GET_GEOLOCATION_FROM_LOCAL_STORAGE', payload: {geolocation}})
    }
};

export const saveGeoLocationToLocalStorage = (data) => dispatch => {
    console.log(data);
    const geolocation = localStorage.setItem('weather', JSON.stringify(data));
    return dispatch({type: 'SAVE_GEOLOCATION_TO_LOCAL_STORAGE', payload: {geolocation}})
};

export const changeCity = (city) => dispatch => {
    return dispatch({type: 'CHANGE_CITY', payload: {city}})
};

export const getWeather = (data) => dispatch => {
    return fetch(API_URL + data + API_KEY)
        .then(res => res.json())
        .then(data => console.log(data))
        .then(data => dispatch({type: 'GET_WEATHER', payload: data}))
};