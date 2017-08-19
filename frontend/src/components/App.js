import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

// redux
import { connect } from 'react-redux';
import store from '../redux/store';

// routing
import history from '../routing/history';
import renderRoutes from '../routing/renderRoutes';

// redux actions
import { getMessages } from '../redux/actions/MailActions';

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
        return renderRoutes(history, this.props);
    }
}
