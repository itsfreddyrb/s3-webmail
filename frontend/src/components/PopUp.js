import React from 'react';

import '../styles/PopUp.css';

const PopUp = (props) => {
  if (props.show) {
    return (
      <div className="overlay">
        <div className="box">
          <i
              className="fa fa-window-close closeButton"
              aria-hidden="true"
              onClick={props.hide}
          ></i>
            {props.children}
        </div>
      </div>
    );
  }
  else {
    return null;
  }
};

export default PopUp;
