import React from 'react';

import Inbox from '../components/Inbox';
import PageNotFound from '../components/NotFound';
import IndividualMessage from '../components/IndividualMessage';

export default (history, props) => {
    const path = history.location.pathname;
    console.log('path substr', path.substr(0, 7));
    if (path === '/') {
        history.push('/inbox/');
        return null;
    }
    else if (path === '/inbox/') {
        return <Inbox messages={props} />
    }
    else if (path.substr(0, 7) === '/inbox/') {
        const msgId = path.substr(7);
        return <IndividualMessage messages={props} id={msgId} />
    }
    else {
        return <PageNotFound />
    }

}
