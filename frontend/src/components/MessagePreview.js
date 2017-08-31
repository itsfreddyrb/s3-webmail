import React from 'react';

import history from '../routing/history';

import Date from './Date';

export default (props) => {
  const { msg } = props;
  const showChars = 30;
  const handleClick = (event) => {
    event.preventDefault();
    if (msg.unread) {
      props.markAsRead(msg._id);
      msg.unread = false;
    }
    const msgRoute = event.currentTarget.getAttribute('data-route');
    history.push(msgRoute);
  }
  const msgRoute = `/message/${msg._id}`;
  let unreadStatusClassName = 'message';
  if (msg.unread === true) {
    unreadStatusClassName += ' unread';
  }
  return (
    <div
      data-route={msgRoute}
      onClick={handleClick}
      className={unreadStatusClassName}
      >
      <div className="subject">{msg.subject}</div>
      <div className="from">{msg.from}</div>
      <div className="text">
        {msg.text.substring(0, showChars)}...
      </div>
      <Date date={msg.date} />
      <br />
    </div>
  );
}
