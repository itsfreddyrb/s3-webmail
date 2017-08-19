import React from 'react';

import '../styles/IndividualMessage.css';

const IndividualMessage = (props) => {
    const { messages } = props.messages;
    const filteredMessages = messages.filter((msg) => {
        if (msg._id === props.id) {
            return msg;
        }
        else {
            return null;
        }
    });
    return (
        <div>
            {filteredMessages.map((msg) => {
                return (
                    <div className="IndividualMessage" key={msg._id}>
                        <div className="from">
                            <span>From:</span>
                            {msg.from}
                        </div>
                        <div className="to">
                            <span>To:</span>
                            {msg.to}
                        </div>
                        <div className="subject">
                            <span>Subject:</span>
                            {msg.subject}
                        </div>
                        <div className="text">
                            <span>Text:</span>
                            {msg.text}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default IndividualMessage;
