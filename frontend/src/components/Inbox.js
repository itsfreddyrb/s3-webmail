import React from 'react';
import '../styles/Inbox.css';

const Inbox = (props) => {
    console.log('props: ', props);
    return (
        <div className="inbox">
            typeof props.state: {typeof(props.state)}
        </div>
    );
};

export default Inbox;
