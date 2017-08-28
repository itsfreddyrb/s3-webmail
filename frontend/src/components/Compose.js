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
        onSubmit={handleSubmit}
      >
        <div>
          To: <input ref="to" />
        </div>
        <div>
          Cc: <input ref="cc" />
        </div>
        <div>
          Bcc: <input ref="bcc" />
        </div>
        <div>
          Subject: <input ref="subject" />
        </div>
        <div>
          <textarea ref="text"></textarea>
        </div>
        <button type="submit">
          Send!
        </button>
      </form>
    );
  }
}
