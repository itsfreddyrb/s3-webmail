import React, { Component } from 'react';

import Message from './MessageFull';
import ReplyPopUp from './ReplyPopUp';


import '../styles/MessagePage.css';

class IndividualMessage extends Component {
  constructor() {
    super();
    this.state = {
      showReply: false,
    };
  }
  componentWillMount() {
    this.messages = this.props.messages.filter((msg) => {
      if(msg._id === this.props.id) {
        return msg;
      }
      else {
        return null;
      }
    });;
  }
  replyToClick(event) {
    this.setState({
      showReply: true,
    });
  }
  closePopUp(event) {
    this.setState({
      showReply: false
    });
  }
  render() {
    const replyToClick = this.replyToClick.bind(this);
    const hideReply = this.closePopUp.bind(this);
    return (
      <div className="inbox">
        {this.messages.map((msg) => {
          return (
            <div
              className="IndividualMessageContainer"
              key={msg._id}
            >
              <Message
                msg={msg}
                key={msg._id}
                replyToClick={replyToClick}
                hideReply={hideReply}
                showReplyStatus={this.state.show}
                sendMail={this.props.sendMail}
              />
              <ReplyPopUp
                show={this.state.showReply}
                hide={hideReply}
                to={msg.from}
                subject={msg.subject}
                sendMail={this.props.sendMail}
                />
            </div>

          );
        })}
      </div>
    );
  }
}

export default IndividualMessage;
