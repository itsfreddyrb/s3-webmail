'use strict';

const getNewMessages = require('s3-emails-to-mongo');

getNewMessages.config({
    credentials: 'shared',
    bucketName: 'zhillb-mail',
    database: 'test',
});
getNewMessages()
.then((messages) => {
    if (!messages.length) {
        console.log('no new messages!');
    }
    else {
        console.log('new messages!\n\n', messages);
    }
})
.catch((err) => {
    console.log(err);
});
