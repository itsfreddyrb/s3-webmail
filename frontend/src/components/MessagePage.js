import React, { Component } from 'react';

import BackButton from './BackButton';
import ReplyToButton from './ReplyToButton';
import ReplyPopUp from './ReplyPopUp';

import '../styles/IndividualMessage.css';

class IndividualMessage extends Component {
    constructor() {
        super();
        this.state = {
            showReply: false,
        };
    }
    componentWillMount() {
        console.log('messages: ', this.props.messages);
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
                        <div className="IndividualMessageContainer" key={msg._id}>
                            <BackButton />

                            <h1>Message
                                <ReplyToButton
                                    replyToClick={replyToClick}
                                 />
                            </h1>
                            <div className="IndividualMessage">

                                <div className="from">
                                    <span>From</span>
                                    <p>
                                        {msg.from}
                                    </p>
                                </div>
                                <div className="to">
                                    <span>To</span>
                                    <p>
                                        {msg.to}
                                    </p>
                                </div>
                                <div className="subject">
                                    <span>Subject</span>
                                    <p>
                                        {msg.subject}
                                    </p>
                                </div>
                                <div className="text">
                                    <span>Text</span>
                                    <p>
                                        {msg.text}
                                    </p>
                                </div>

                            </div>
                            <ReplyPopUp
                                show={this.state.showReply}
                                hide={hideReply}
                                to={msg.from}
                                subject={msg.subject}
                                sendMail={this.props.sendMail}
                            />
                        </div>

                    )
                })}
            </div>
        );
    }
}

export default IndividualMessage;
