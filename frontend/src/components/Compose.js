import React, { Component } from 'react';

import '../styles/Compose.css';

export default class Compose extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const to = this.refs.to.value;
    const cc = this.refs.cc.value;
    const bcc = this.refs.bcc.value;
    const subject = this.refs.subject.value;
    const text = this.refs.text.value;
    this.props.sendMail({
      to, cc, bcc, subject, text
    });
  }
  render() {
    const handleSubmit = this.handleSubmit.bind(this);
    return (
      <form
        className="compose"
        >
        <div>
          <strong>To:</strong>
          <input ref="to" />
        </div>
        <div>
          <strong>Cc:</strong>
          <input ref="cc" />
        </div>
        <div>
          <strong>Bcc:</strong>
          <input ref="bcc" />
        </div>
        <div>
          <strong>Subject:</strong>
          <input ref="subject" />
        </div>
        <div>
          <strong>Text:</strong>
          <textarea ref="text"></textarea>
        </div>
        <i
          className="fa fa-paper-plane sendIcon"
          aria-hidden="true"
          onClick={handleSubmit}
          >Send</i>
      </form>
    );
  }
}
