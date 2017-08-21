import React from 'react';

import '../styles/InboxNavBar.css';

const InboxNavBar = (props) => {
    const goToCompose = () => {
        props.changeRoute('/compose/');
    }
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
                onClick={goToCompose}
            ></i>
        </div>
    )
}

export default InboxNavBar;
