import React from 'react';

import InboxNavBar from './InboxNavBar';
import Message from './Message';
import ComposeNewMail from './Compose';
import PopUp from './PopUp';

import '../styles/Inbox.css';

const Inbox = (props) => {
    return (
        <div className="inbox">
            <InboxNavBar
                getNewMessages = {props.getNewMessages}
                showComposeWindow = {props.showComposeWindow}
                setComposeStateToShow = {props.setComposeStateToShow}
            />
            <h1>Inbox</h1>
            <div className="headers">
                <div className="subject">subject</div>
                <div className="from">from</div>
                <div className="text">message</div>
                <div className="date">date</div>
            </div>
            {props.messages.map((msg) => {
                return (
                    <Message
                        msg={msg}
                        markAsRead={props.markAsRead}
                        key={msg._id}
                    />
                );
            })}
            <PopUp
              show={props.showComposeWindow}
              setComposeStateToHide={props.setComposeStateToHide}
            >
              <ComposeNewMail
                sendMail={props.sendMail}
              />
            </PopUp>
        </div>
    );
};

export default Inbox;
