import React from 'react';

import InboxNavBar from './InboxNavBar';
import Message from './Message';

import '../styles/Inbox.css';

const Inbox = (props) => {
    return (
        <div className="inbox">
            <InboxNavBar />
            <h1>Inbox</h1>
            <div className="headers">
                <div className="subject">subject</div>
                <div className="from">from</div>
                <div className="text">message</div>
                <div className="date">date</div>
            </div>
            {props.messages.messages.map((msg) => {
                return <Message msg={msg} key={msg._id} />
            })}
        </div>
    );
};

export default Inbox;
