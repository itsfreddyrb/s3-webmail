import React from 'react';
import history from '../routing/history';

const BackButton = (props) => {
  const goBack = (event) => {
    history.goBack();
  };
  return (
    <i className="fa fa-arrow-left fa-2x"
      aria-hidden="true"
      onClick={goBack}
      ></i>
  );
};

export default BackButton;
