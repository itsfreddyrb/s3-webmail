const getNewMessages = require('s3-emails-to-mongo');
const { Mail } = require('../config/MailModel');
// const getMessages = require('../fn/getMessages.js');

getNewMessages.config({
    credentials: 'shared',
    bucketName: 'zhillb-mail',
    database: 'test',
});

module.exports = [
    {
        method: 'GET',
        path: '/messages/',
        handler: (req, reply) => {
            Mail.find({})
            .then((messages) => {
                reply(messages);
            })
            .catch((err) => {
                reply(err);
            });
        },
    },
    {
        method: 'GET',
        path: '/getnew/',
        handler: (req, reply) => {
            getNewMessages().then((data) => {
                reply(data);
            }).catch((err) => {
                reply(err);
            })
        },
    },
    {
        method: 'POST',
        path: '/sendmail/',
        handler: (req, reply) => {
            return null;
        }
    },
];
