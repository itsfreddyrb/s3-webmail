import React from 'react';

export default (props) => {
    const msgDate = new Date(props.date);
    const readableDate = msgDate.toLocaleString();
    return (
        <div className="date">
            {readableDate}
        </div>
    )
}
