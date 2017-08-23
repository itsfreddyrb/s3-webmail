import React, { Component } from 'react';

import '../styles/ReplyToPopUp.css';

export default class ReplyToPopUp extends Component {
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
        const { to } = this.props;
        const subject = 'RE: ' + this.props.subject;
        if (this.props.show) {
            return (
                <form className="replyPopUp">
                    <p>To: {to}</p>
                    <p>Subject: {subject}</p>
                    <p>Message:</p>
                    <textarea
                        ref="reply"
                    ></textarea>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                    >Reply!</button>
                </form>
            );
        }
        else {
            return null;
        }
    }
}
