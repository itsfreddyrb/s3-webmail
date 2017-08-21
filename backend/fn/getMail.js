const { Mail } = require('../config/MailModel');

module.exports = () => {
    return new Promise((fulfill, reject) => {
        // return messages by date descending
        Mail.find({}, null, {sort: {"_id": -1}})
        .then((messages) => {
            fulfill(messages);
        })
        .catch((err) => {
            reject(err);
        });
    });
};
