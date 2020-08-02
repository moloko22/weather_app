const initialState = {
    weather: {},
    selectedCity: '',
    geolocation: {
        longitude: '',
        latitude: '',
        error: '',
    }
};

export function weather(state = initialState, action){
    switch (action.type) {
        case 'GET_GEOLOCATION_FROM_LOCAL_STORAGE': {
            const newState = Object.assign({}, state);
            newState.geoLocation = action.payload.geolocation;
            return newState;
        }
        case 'SAVE_GEOLOCATION_TO_LOCAL_STORAGE': {
            const newState = Object.assign({}, state);
            newState.geolocation = action.payload.geolocation;
            return newState;
        }
        case 'GET_WEATHER': {
            const newState = Object.assign({}, state);
            newState.weather = action.payload;
            return newState;
        }
        case 'CHANGE_CITY': {
            const newState = Object.assign({}, state);
            newState.selectedCity = action.payload.city;
            return newState;
        }
        default: return state;
    }
}