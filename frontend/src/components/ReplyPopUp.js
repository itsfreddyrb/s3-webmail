import React from 'react';

import Reply from './Reply';
import PopUp from './PopUp';

const ReplyPopUp = (props) => {
  return (
    <PopUp
      show={props.show}
      hide={props.hide}
    >
      <Reply
        sendMail={props.sendMail}
        to={props.to}
        subject={props.subject}
      />
    </PopUp>
  );
};

export default ReplyPopUp;
