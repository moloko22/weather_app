import {API_URL, API_KEY} from "../../api/weather_api";

export const changeCity = (city) => dispatch => {
    return dispatch({type: 'CHANGE_CITY', payload: {city}})
};

export const getGeoLocation = (data) => dispatch => {
    return dispatch({type: 'GET_GEOLOCATION', payload: {longitude: data.coords.longitude, latitude: data.coords.latitude, error: data.message}})
};

export const getWeather = (data, obj) => dispatch => {
    return fetch('http://' + API_URL + data + API_KEY)
        .then(res => res.json())
        .then(data =>{
            dispatch({type: 'GET_WEATHER', payload: data});
            if(obj){
                dispatch({type: 'ROUTING', payload: obj})
            }
        })
        .catch(err => dispatch({type: 'GET_WEATHER', payload: {err: err}}))
};

export const timeTravelBackward = () => dispatch => {
    return Promise.resolve()
        .then(() =>  dispatch({type: 'ROUTING', payload: {method: 'goBack'}}))
        .then(() => dispatch({type: 'TIME_TRAVEL_BACKWARD'}))
};