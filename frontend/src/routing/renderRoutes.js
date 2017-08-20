import React from 'react';

import Inbox from '../components/Inbox';
import PageNotFound from '../components/NotFound';
import IndividualMessage from '../components/IndividualMessage';

export default (history, props, changeRoute) => {
    const path = history.location.pathname;
    if (path === '/') {
        changeRoute('/inbox/');
        return null;
    }
    else if (path === '/inbox/') {
        return <Inbox messages={props} changeRoute={changeRoute} />
    }
    else if (path.substr(0, 7) === '/inbox/') {
        const msgId = path.substr(7);
        return <IndividualMessage messages={props} id={msgId} goBack={history.goBack.bind(this)} />
    }
    else {
        return <PageNotFound />
    }

}
