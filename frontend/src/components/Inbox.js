import React from 'react';

import InboxNavBar from './InboxNavBar';
import Message from './Message';

import '../styles/Inbox.css';

const Inbox = (props) => {
    return (
        <div className="inbox">
            <InboxNavBar
                getNewMessages={props.getNewMessages}
            />
            <h1>Inbox</h1>
            <div className="headers">
                <div className="subject">subject</div>
                <div className="from">from</div>
                <div className="text">message</div>
                <div className="date">date</div>
            </div>
            {props.messages.map((msg) => {
                return (
                    <Message
                        msg={msg}
                        markAsRead={props.markAsRead}
                        key={msg._id}
                    />
                );
            })}
        </div>
    );
};

export default Inbox;
