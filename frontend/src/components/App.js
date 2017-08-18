import React, { Component } from 'react';
// import PropTypes from 'prop-types'

import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import axios from 'axios-es6';

import { connect, Provider } from 'react-redux';
import store from '../redux/store';

import Inbox from './Inbox';
import auth from '../auth';

const history = createBrowserHistory({});
const ajax = axios.create({
    baseURL: 'http://localhost:9001/',
    auth,
});

export default class App extends Component {
    constructor() {
        super();
        this.getMessages();
    }
    componentWillMount() {
        store.subscribe(() => {
            const messages = store.getState().messages;
            console.log('state: ', store.getState());
            this.setState({
                messages
            })
        });
    }
    getMessages() {
        store.dispatch((dispatch) => {
            dispatch({ type: 'FETCH_MESSAGES' });
            ajax.get('/messages/')
            .then((response) => {
                dispatch({
                    type: 'LOAD_MESSAGES',
                    payload: response.data,
                });
                this.forceUpdate();
            })
            .catch((err) => {
                dispatch({
                    type: 'FETCH_MESSAGES_ERROR',
                    payload: err,
                });
            })
        });
    }
    render() {
        const InboxPath = () => {
            return <Route exact path="/"
                component={Inbox} />
        };
        return (
            <Router history={history}>
                <Switch>
                    <InboxPath />
                </Switch>
            </Router>
        );
    }

}
