const initialState = {
    weather: {},
    selectedCity: '',
};

export function weather(state = initialState, action){
    switch (action.type) {
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