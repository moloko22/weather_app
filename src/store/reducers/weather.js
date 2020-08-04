const initialState = {
    timeTravel: [],
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
        case 'TIME_TRAVEL_BACKWARD': {
            return state.timeTravel[0].timeTravel[0]
        }
        case 'GET_GEOLOCATION': {
            const newState = Object.assign({}, state);
            newState.geolocation = action.payload;
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
                newState.selectedCity = action.payload.name;
                newState.timeTravel[state.timeTravel.length] = newState;
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