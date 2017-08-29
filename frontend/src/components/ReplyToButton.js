import React from 'react';

const ReplyToButton = (props) => {
  return (
    <i className="fa fa-reply"
      aria-hidden="true"
      onClick={props.replyToClick}
      ></i>
  );
};

export default ReplyToButton;
