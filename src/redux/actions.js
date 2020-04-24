import {CREATE_POST, HIDE_ALLERT, HIDE_LOADER, REQUEST_POSTS, SHOW_ALLERT, SHOW_LOADER} from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader() {
    return{
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return{
        type: HIDE_LOADER
    }
}
export function showAllert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALLERT,
            payload: text
        })

        setTimeout( () => {
            dispatch(hideAllert())
        }, 3000)
    }
}

export function hideAllert(text) {
    return{
        type: HIDE_ALLERT
    }
}

export function fetchPosts() {
    return {
        type: REQUEST_POSTS
    }
    // return async dispatch => {
    //     try {
    //         dispatch(showLoader())
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    //         const json = await  response.json()
    //         setTimeout( () => {
    //             dispatch({ type: FETCH_POST, payload: json})
    //             dispatch(hideLoader())
    //         }, 500)
    //     }
    //     catch (e) {
    //         dispatch(showAllert('Что-то пошло не так'))
    //         dispatch(hideLoader())
    //     }
    // }
}