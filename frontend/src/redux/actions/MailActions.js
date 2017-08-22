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

export function getNewMessages(dispatch) {
    dispatch((dispatch) => {
        dispatch({ type: 'GET_NEW_MAIL' });
        ajax.get('/getnew/')
        .then((response) => {
            getMessages(dispatch);
        })
        .catch((err) => {
            console.log('err', err);
        })
    });
}

export function sendMail(msg) {
    const { to, subject, text } = msg;
    ajax.post('/sendmail/', {
        to,
        from: auth.default_email,
        subject,
        text,
    }).then((data) => {
        console.log('email sent');
    }).catch((err) => {
        console.log(err);
    });
}

export function markAsRead(id) {
    ajax.post('/markasread/', {
        id 
    })
    return null;
}
