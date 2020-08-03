const initialState = {
    weather: '',
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
            newState.geoLocation = {
                error: action.payload.error,
                longitude: action.payload.longitude,
                latitude: action.payload.latitude,
            };
            return newState;
        }
        case 'SAVE_GEOLOCATION_TO_LOCAL_STORAGE': {
            const newState = Object.assign({}, state);
            newState.geolocation = {
                longitude: action.payload.longitude,
                latitude: action.payload.latitude,
                error: action.payload.error,
            };
            return newState;
        }
        case 'GET_WEATHER': {
            const newState = Object.assign({}, state);
            if(!action.payload.err){
                newState.weather = {
                    wind_speed: action.payload.wind.speed,
                    temp: action.payload.main.temp,
                    visibility: action.payload.visibility,
                    humidity: action.payload.main.humidity,
                    country: action.payload.sys.country,
                    city: action.payload.name,
                    feels_like: action.payload.main.feels_like,
                    icon: action.payload.weather[0].icon,
                    description: action.payload.weather[0].description,
                    pressure: action.payload.main.pressure,
                };
                return newState;
            }
            return state;
        }
        case 'CHANGE_CITY': {
            const newState = Object.assign({}, state);
            newState.selectedCity = action.payload.city;
            return newState;
        }
        default: return state;
    }
}