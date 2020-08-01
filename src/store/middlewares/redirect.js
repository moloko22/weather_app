import {history} from "../../_helpers/history";

export const redirect = store => next => action => {
    if (action.type === "ROUTING") {
        history[action.payload.method](action.payload.nextUrl)
    }
    return next(action)
}