import axios from 'axios-es6';

import auth from '../../auth';

const ajax = axios.create({
    baseURL: 'http://localhost:9001/',
    auth,
});

export function getMessages(dispatch) {
    dispatch((dispatch) => {
        dispatch({ type: 'FETCH_MESSAGES' });
        ajax.get('/messages/')
        .then((response) => {
            dispatch({
                type: 'LOAD_MESSAGES',
                payload: response.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: 'FETCH_MESSAGES_ERROR',
                payload: err,
            });
        })
    });
}
