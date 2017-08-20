import React from 'react';

import '../styles/NotFound.css';

const SadFace = () => {
    return (
        <i className="fa fa-frown-o fa-4x" aria-hidden="true"></i>
    );
};

const PageNotFound = () => {
    return (
        <div className="PageNotFound">
            This page wasn't found!
            <br /><br />
            <SadFace />
        </div>
    );
}

export default PageNotFound;
