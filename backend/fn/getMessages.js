const {
    Messages,
    ConnectToMailbox,
    DisconnectFromMailbox,
} = require('../config/MailModel.js');

const getMessages = () => {
    return new Promise((fulfill, reject) => {
        ConnectToMailbox();
        Messages.find({})
        .then((messages) => {
            fulfill(messages);
            DisconnectFromMailbox();
        })
        .catch((err) => {
            reject(err);
        })
    });
}

module.exports = getMessages;
