import React from 'react';

import BackButton from './BackButton';

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
        <div className="inbox">
            {filteredMessages.map((msg) => {
                // const replyTo = msg.from;
                return (
                    <div className="IndividualMessageContainer" key={msg._id}>
                        <BackButton />
                        <h1>Message</h1>
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
                    </div>

                )
            })}
        </div>
    )
}

export default IndividualMessage;
