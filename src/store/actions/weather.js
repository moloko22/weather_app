import {API_URL, API_KEY} from "../../api/weather_api";

export const getGeoLocationFromLocalStorage = () => dispatch => {
    if(localStorage.getItem('weather')){
        const geolocation = localStorage.getItem('weather');
        const data = JSON.parse(geolocation);
        return dispatch({type: 'GET_GEOLOCATION_FROM_LOCAL_STORAGE', payload: {...data, error: ''}})
    }else{
        return dispatch({type: 'GET_GEOLOCATION_FROM_LOCAL_STORAGE', payload: {longitude: '', latitude: '', error: 'No geo in LS'}})
    }
};

export const saveGeoLocationToLocalStorage = (data) => dispatch => {
    let err = '';
    try{
        localStorage.setItem('weather', JSON.stringify(data));
    }catch (e){
        err = e;
    }
    localStorage.setItem('weather', JSON.stringify(data));
    return dispatch({type: 'SAVE_GEOLOCATION_TO_LOCAL_STORAGE', payload: {longitude: data.longitude, latitude: data.latitude, error: err}})
};

export const changeCity = (city) => dispatch => {
    return dispatch({type: 'CHANGE_CITY', payload: {city}})
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