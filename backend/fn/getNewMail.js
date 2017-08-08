const getNewMessages = require('s3-emails-to-mongo');

getNewMessages.config({
    credentials: 'shared',
    bucketName: 'zhillb-mail',
    database: 'test',
});

module.exports = () => {
    return new Promise((fulfill, reject) => {
        getNewMessages()
        .then((newMessages) => {
            fulfill(newMessages);
        })
        .catch((err) => {
            reject(err);
        });
    });
}
