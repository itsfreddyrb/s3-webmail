import React from 'react';

import history from '../routing/history';
import InboxNavBar from './InboxNavBar';

import '../styles/Inbox.css';

const Inbox = (props) => {
    const messageTextLength = 30;
    const { messages } = props.messages;

    const handleClick = (event) => {
        event.preventDefault();
        history.push(event.currentTarget.pathname)
    }

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
            {messages.map((msg) => {
                const msgRoute = `/inbox/${msg._id}`;
                return (
                    <a href={msgRoute} className="message" key={msg._id} onClick={handleClick}>
                        <div className="subject">{msg.subject}</div>
                        <div className="from">{msg.from}</div>
                        <div className="text">
                            {msg.text.substring(0, messageTextLength)}...
                        </div>
                        <div className="date">{msg.date}</div>
                        <br />
                    </a>
                );
            })}
        </div>
    );
};

export default Inbox;
