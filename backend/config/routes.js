const getMessages = require('../fn/getMessages.js');

module.exports = [
    {
        method: 'GET',
        path: '/messages/',
        handler: (req, reply) => {
            getMessages().then((data) => {
                reply(data);
            }).catch((err) => {
                reply(err);
            });
        },
    },
];
