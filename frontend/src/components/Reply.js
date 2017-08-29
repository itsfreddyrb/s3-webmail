import React, { Component } from 'react';

import '../styles/Reply.css';

export default class ReplyToPopUp extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const { to, subject } = this.props;
    const text = this.refs.reply.value;
    this.props.sendMail({
      to, subject, text,
      // these are temporary
      cc: '',
      bcc: '',
    });
  }
  render() {
    const handleSubmit = this.handleSubmit.bind(this);
    const { to } = this.props;
    const subject = 'RE: ' + this.props.subject;

    const ToComponent = () => {
      return (
        <div>
          <strong>To:</strong>
          {to}
        </div>
      )
    };

    const SubjectComponent = () => {
      return (
        <div>
          <strong>Subject:</strong>
          {subject}
        </div>
      )
    };

    return (
      <form className="reply">
        <ToComponent />
        <SubjectComponent />
        <div>
          <textarea
            ref="reply"
            ></textarea>
        </div>

        <i
          className="fa fa-paper-plane sendIcon"
          aria-hidden="true"
          onClick={handleSubmit}
          >
          Send
        </i>
      </form>
    );
  }
}
