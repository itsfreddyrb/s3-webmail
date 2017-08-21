import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

// redux
import { connect } from 'react-redux';
import store from '../redux/store';

// routing
import history from '../routing/history';

// redux actions
import { getMessages, getNewMessages } from '../redux/actions/MailActions';

// custom components
import Inbox from '../components/Inbox';
import PageNotFound from '../components/NotFound';
import IndividualMessage from '../components/IndividualMessage';
import InboxNavBar from '../components/InboxNavBar';

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
        this.state = {
            route: history.location.pathname
        };
        getMessages(store.dispatch);
    }
    componentWillMount() {
        // set listener for route change
        history.listen(() => {
            this.setState({ route: history.location.pathname });
        });
    }
    changeRoute(newRoute) {
        history.push(newRoute);
    }
    getNewMail() {
        getNewMessages(store.dispatch);
    }
    render() {
        const path = history.location.pathname;
        const changeRoute = this.changeRoute.bind(this);
        const getNewMessages = this.getNewMail.bind(this);
        const goBack = history.goBack.bind(this);
        const isInboxWithID = (path.substr(0, 7) === '/inbox/');

        // components
        const inboxPath = () => {
            return (
                <div>
                    <InboxNavBar
                        changeRoute={changeRoute}
                        getNewMessages={getNewMessages}

                    />
                    <Inbox
                        messages={this.props}
                        changeRoute={changeRoute}
                    />
                </div>

            );
        };
        const individualMessagePath = () => {
            const msgId = this.state.route.substr(7);
            return (
                <IndividualMessage
                    messages={this.props}
                    id={msgId}
                    goBack={goBack}
                />
            );
        };
        const pageNotFoundPath = () => {
            return (
                <PageNotFound />
            );
        }

        // router
        if (this.state.route === '/') {
            this.changeRoute('/inbox/');
            return null;
        }
        else if (this.state.route === '/inbox/') {
            return inboxPath();
        }
        else if (isInboxWithID) {
            return individualMessagePath();
        }
        else {
            return pageNotFoundPath();
        }
    }
}
