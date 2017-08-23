const { Mail } = require('../config/MailModel.js');

const getMessages = () => {
    return new Promise((fulfill, reject) => {
        Mail.find({})
        .then((messages) => {
            fulfill(messages);
        })
        .catch((err) => {
            reject(err);
        })
    });
}

module.exports = getMessages;
