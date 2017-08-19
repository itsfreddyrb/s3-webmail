import React, { Component } from 'react';
// import PropTypes from 'prop-types'

import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import { connect } from 'react-redux';
import store from '../redux/store';

import { getMessages } from '../redux/actions/MailActions';
import Inbox from './Inbox';

const history = createBrowserHistory({});

@connect((store) => {
    const {
        loaded,
        loading,
        error,
        messages,
    } = store.messages;
    return {
        loaded,
        loading,
        error,
        messages,
    }
})
export default class App extends Component {
    constructor() {
        super();
        getMessages(store.dispatch);
    }
    render() {
        const InboxPath = () => {
            return <Route exact path="/"
                render={(props) => <Inbox messages={this.props} />} />
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
