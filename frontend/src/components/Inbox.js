import React from 'react';
import '../styles/Inbox.css';

const Inbox = (props) => {
    console.log('props from inbox: ', props);
    const { messages } = props.messages;
    return (
        <div className="inbox">
            {messages.map((msg) => {
                return (
                    <div className="msg">
                        <span>{msg.subject}</span>
                        --
                        <span>{msg.from}</span>
                        <br />
                    </div>
                )
            })}
        </div>
    );
};

export default Inbox;
