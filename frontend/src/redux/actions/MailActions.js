import axios from 'axios-es6';

import auth from '../../auth';
import config from '../../config';

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
  const { to, bcc, cc, subject, text } = msg;
  const splitByCommaAndTrim = (str) => {
    return str.split(',').map((val) => {
      return val.trim();
    })
  };
  const getToAddresses = () => {
    if (to !== '') {
      return splitByCommaAndTrim(to);
    }
    else {
      return [];
    }
  };
  const getCcAddresses = () => {
    if (cc !== '') {
      return splitByCommaAndTrim(cc);
    }
    else {
      return [];
    }
  };
  const getBccAddresses = () => {
    if (bcc !== '') {
      return splitByCommaAndTrim(bcc);
    }
    else {
      return [];
    }
  };
  ajax.post('/sendmail/', {
    to: getToAddresses(),
    from: config.default_email,
    cc: getCcAddresses(),
    bcc: getBccAddresses(),
    subject,
    text,
  }).then((data) => {
    console.log('email sent');
  }).catch((err) => {
    console.log(err);
  });
}

export function markAsRead(msg) {
  const { id, unread } = msg;
  if (unread) {
    ajax.put('/markasread/', {
      id
    });
  }
}
