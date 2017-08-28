import React from 'react';

import ComposeNewMail from './Compose';
import PopUp from './PopUp';

const ComposePopUp = (props) => {
  return (
    <PopUp
      show={props.showComposeWindow}
      hide={props.setComposeStateToHide}
    >
      <ComposeNewMail
        sendMail={props.sendMail}
      />
    </PopUp>
  );
};

export default ComposePopUp;
