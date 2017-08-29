import React from 'react';

import '../styles/InboxNavBar.css';

const InboxNavBar = (props) => {
  return (
    <div className="navbar">
      <i
        className="fa fa-refresh fa-2x"
        aria-hidden="true"
        onClick={props.getNewMessages}
        ></i>
      <i
        className="fa fa-plus fa-2x"
        aria-hidden="true"
        onClick={props.setComposeStateToShow}
        ></i>
    </div>
  )
}

export default InboxNavBar;
