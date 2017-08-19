import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';
import store from '../redux/store';

// routing
import history from '../routing/history';

// redux actions
import { getMessages } from '../redux/actions/MailActions';

// custom components
import Inbox from './Inbox';
import PageNotFound from './NotFound';
import IndividualMessage from './IndividualMessage';

// icons
import '../../node_modules/font-awesome/css/font-awesome.css';

// connect props & dispatch to component
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
        // re-render page on route change
        history.listen(() => {
            this.render();
        });
    }
    render() {
        console.log(history.location.pathname);
        
        switch (history.location.pathname) {
            case '/': {
                history.push('/inbox/');
                break;
            }
            case '/inbox/': {
                return <Inbox messages={this.props} />
            }
            default: {
                return <PageNotFound />
            }
        }

    }
}
