import {CREATE_POST} from "./types";
import {showAllert} from "./actions";

const forbidden = [ 'fuck', 'spam', 'php']

export function forbidenWordsMiddleware({ dispatch }) {
    return function (next) {
    return function (action) {
        if (action.type === CREATE_POST) {
            const found = forbidden.filter(w => action.payload.title.includes(w))
            if (found.length) {
                return dispatch(showAllert('Вы спамер. Мы вас не звали, идите домой'))
            }
        }
        return next(action)
    }
    }
}