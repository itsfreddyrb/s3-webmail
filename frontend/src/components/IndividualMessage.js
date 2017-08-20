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

    const BackButton = () => {
        const goBack = () => {
            props.goBack();
        };
        return (
            <i className="fa fa-arrow-left fa-2x pointer"
                aria-hidden="true"
                onClick={goBack}
                ></i>
        );
    };

    return (
        <div className="inbox">
            {filteredMessages.map((msg) => {
                return (
                    <div className="IndividualMessage" key={msg._id}>
                        <h1>Message</h1>

                        <div className="from">
                            <span>From</span>
                            {msg.from}
                        </div>
                        <div className="to">
                            <span>To</span>
                            {msg.to}
                        </div>
                        <div className="subject">
                            <span>Subject</span>
                            {msg.subject}
                        </div>
                        <div className="text">
                            <span>Text</span>
                            {msg.text}
                        </div>
                        <BackButton />
                    </div>
                )
            })}
        </div>
    )
}

export default IndividualMessage;
