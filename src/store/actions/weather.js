export const changeCity = (city) => dispatch => {
    return dispatch({type: 'CHANGE_CITY', payload: {city}})
};

export const getWeather = (city) => dispatch => {
    return fetch('')
        .then(res => res.json())
        .then(data => dispatch({type: 'GET_WEATHER', payload: data}))
};