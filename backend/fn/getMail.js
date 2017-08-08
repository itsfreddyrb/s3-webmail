const { Mail } = require('../config/MailModel');

module.exports = () => {
    return new Promise((fulfill, reject) => {
        Mail.find({})
        .then((messages) => {
            fulfill(messages);
        })
        .catch((err) => {
            reject(err);
        });
    });
};
