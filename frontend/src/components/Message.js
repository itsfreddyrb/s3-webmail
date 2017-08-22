import React from 'react';

import history from '../routing/history';

import Date from './Date';

export default (props) => {
    const { msg } = props;
    const showChars = 30;
    const handleClick = (event) => {
        event.preventDefault();
        history.push(event.currentTarget.pathname)
    }
    const msgRoute = `/inbox/${msg._id}`;
    return (
        <a
            href={msgRoute}
            className="message"
            onClick={handleClick}
        >
            <div className="subject">{msg.subject}</div>
            <div className="from">{msg.from}</div>
            <div className="text">
                {msg.text.substring(0, showChars)}...
            </div>
            <Date date={msg.date} />
            <br />
        </a>
    );
}
