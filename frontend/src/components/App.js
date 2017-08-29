import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

// redux
import { connect } from 'react-redux';
import store from '../redux/store';

// routing
import history from '../routing/history';

// user config
import config from '../config';

// redux actions
import {
  getMessages,
  getNewMessages,
  sendMail,
  markAsRead,
} from '../redux/actions/MailActions';

// custom components
import Inbox from '../components/Inbox';
import MessagePage from '../components/MessagePage';
import PageNotFound from '../components/NotFound';


// icons
import '../../node_modules/font-awesome/css/font-awesome.css';
import '../styles/App.css';

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
      route: history.location.pathname,
      showComposeWindow: false,
      showReplyWindow: false,
    };
    getMessages(store.dispatch);
  }
  componentWillMount() {
    // set listener for route change
    history.listen(() => {
      this.setState({ route: history.location.pathname });
    });
    // set auto check for new messages
    const getNewMail = this.getNewMail.bind(this);
    setTimeout(getNewMail, config.auto_reload_messages);
  }
  getNewMail() {
    getNewMessages(store.dispatch);
  }
  setComposeStateToShow() {
    this.setState({
      showComposeWindow: true,
    });
  }
  setComposeStateToHide() {
    this.setState({
      showComposeWindow: false,
    });
  }
  setReplyStateToShow() {
    this.setState({
      showReplyWindow: true,
    });
  }
  setReplyStateToHide() {
    this.setState({
      showReplyWindow: false,
    });
  }
  render() {
    const path = history.location.pathname;
    const getNewMail = this.getNewMail.bind(this);

    const setComposeStateToShow = this.setComposeStateToShow.bind(this);
    const setComposeStateToHide = this.setComposeStateToHide.bind(this);

    const setReplyStateToShow = this.setReplyStateToShow.bind(this);
    const setReplyStateToHide = this.setReplyStateToHide.bind(this);

    // components
    const inboxPath = () => {
      return (
        <div>
          <Inbox
            messages={this.props.messages}
            getNewMessages={getNewMail}
            markAsRead={markAsRead}
            setComposeStateToShow={setComposeStateToShow}
            setComposeStateToHide={setComposeStateToHide}
            showComposeWindow={this.state.showComposeWindow}
            sendMail={sendMail}
            />
        </div>

      );
    };
    const individualMessagePath = () => {
      const msgId = this.state.route.substr(9);
      return (
        <MessagePage
          messages={this.props.messages}
          id={msgId}
          sendMail={sendMail}
          setReplyStateToShow={setReplyStateToShow}
          setReplyStateToHide={setReplyStateToHide}
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
      history.push('/inbox/');
      return null;
    }
    else if (this.state.route === '/inbox/') {
      return inboxPath();
    }
    // route is /message/:id
    else if (path.substr(0, 9) === '/message/' && path !== '/message/') {
      return individualMessagePath();
    }
    else {
      return pageNotFoundPath();
    }
  }
}
