import {HIDE_ALLERT, HIDE_LOADER, SHOW_ALLERT, SHOW_LOADER} from "./types";

const initialState = {
    loading: false,
    alert:null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
         case SHOW_ALLERT:
            return {...state, alert: action.payload}
        case HIDE_ALLERT:
            return {...state, alert: null}
        default: return state
    }
}