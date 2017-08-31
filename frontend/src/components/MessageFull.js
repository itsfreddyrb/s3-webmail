import React from 'react';

import Attachments from './Attachments';
import BackButton from './BackButton';
import ReplyToButton from './ReplyToButton';

export default (props) => {
  const { msg, replyToClick, } = props;
  const hasAttachments = () => {
    if (msg.attachments.length) {
      return true;
    }
    else {
      return false;
    }
  }
  return (
    <div className="IndividualMessageContainer">
      <BackButton />

      <h1>Message
        <ReplyToButton
          replyToClick={replyToClick}
          />
      </h1>
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
        <Attachments
          hasAttachment={hasAttachments}
          attachments={msg.attachments}
        />
      </div>

    </div>

  )
}
