import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import {redirect} from "./middlewares/redirect";
import {weather} from "./reducers/weather";

const store = compose(applyMiddleware(thunk), applyMiddleware(redirect))(createStore)
(combineReducers({weather}));

export default store;