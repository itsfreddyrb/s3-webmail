import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

// redux
import { connect } from 'react-redux';
import store from '../redux/store';

// routing
import history from '../routing/history';

// redux actions
import { getMessages } from '../redux/actions/MailActions';

// custom components
import Inbox from '../components/Inbox';
import PageNotFound from '../components/NotFound';
import IndividualMessage from '../components/IndividualMessage';

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
    changeRoute(newRoute) {
        history.push(newRoute);
        this.render();
    }
    render() {
        const path = history.location.pathname;
        const changeRoute = this.changeRoute.bind(this);
        const goBack = history.goBack.bind(this);

        // router
        if (path === '/') {
            this.changeRoute('/inbox/');
            return null;
        }
        else if (path === '/inbox/') {
            return (
                <Inbox
                    messages={this.props}
                    changeRoute={changeRoute}
                />
            );
        }
        else if (path.substr(0, 7) === '/inbox/') {
            const msgId = path.substr(7);
            return (
                <IndividualMessage
                    messages={this.props}
                    id={msgId}
                    goBack={goBack}
                />
            );
        }    
        else {
            return <PageNotFound />
        }
    }
}
