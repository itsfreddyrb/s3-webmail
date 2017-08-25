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
                        <i
                            className="fa fa-window-close closeButton"
                            aria-hidden="true"
                            onClick={closePopUp}
                        ></i>
                        <div>
                            <strong>To:</strong>
                            {to}
                        </div>
                        <div>
                            <strong>Subject:</strong>
                            {subject}
                        </div>
                        <div>
                            <textarea
                                ref="reply"
                            ></textarea>
                        </div>

                        <i
                            className="fa fa-paper-plane sendIcon"
                            aria-hidden="true"
                            onClick={handleSubmit}
                        >Send</i>
                    </div>

                </form>
            );
        }
        else {
            return null;
        }
    }
}
