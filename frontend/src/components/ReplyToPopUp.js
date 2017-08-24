import React, { Component } from 'react';

import '../styles/ReplyToPopUp.css';

export default class ReplyToPopUp extends Component {
    closePopUp(event) {
        event.preventDefault();
        this.props.close();
    }
    handleSubmit(event) {
        event.preventDefault();
        const { to, subject } = this.props;
        const text = this.refs.reply.value;
        this.props.sendMail({
            to, subject, text
        });
    }
    render() {
        const handleSubmit = this.handleSubmit.bind(this);
        const closePopUp = this.closePopUp.bind(this);
        const { to } = this.props;
        const subject = 'RE: ' + this.props.subject;
        if (this.props.show) {
            return (
                <form className="replyPopUp">
                    <div className="box">
                        <div>To: {to}</div>
                        <div>Subject: {subject}</div>
                        <div>Message:</div>
                        <textarea
                            ref="reply"
                        ></textarea>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Reply!
                        </button>
                    </div>
                    <button onClick={closePopUp}>Cancel</button>
                </form>
            );
        }
        else {
            return null;
        }
    }
}
