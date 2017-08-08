'use strict';

// const getNewMessages = require('s3-emails-to-mongo');
//
// getNewMessages.config({
//     credentials: 'shared',
//     bucketName: 'zhillb-mail',
//     database: 'test',
// });
// getNewMessages()
// .then((messages) => {
//     if (!messages.length) {
//         console.log('no new messages!');
//     }
//     else {
//         console.log('new messages!\n\n', messages);
//     }
// })
// .catch((err) => {
//     console.log(err);
// });

const sendMail = require('./sendMail.js');

sendMail({
    toAddresses: ['zhillb@gmail.com'],
    from: 'zach@zacharyhill.xyz',
    subject: 'sending mail from our script!',
    text: "I hope it works! (:"
});
