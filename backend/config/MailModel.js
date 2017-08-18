const mongoose = require('mongoose');
const promisify = require('util').promisify;

const mailSchema = mongoose.Schema({
    from: String,
    to: String,
    cc: String,
    bcc: String,
    date: Date,
    messageId: String,
    subject: String,
    inReplyTo: String,
    replyTo: String,
    references: String,
    text: String,
    attachments: Array,
    type: String,
});

const Mail = mongoose.model('Mail', mailSchema);
Mail.find = promisify(Mail.find);

const connect = (dbName) => {
    mongoose.connect('mongodb://localhost/' + dbName, {
        useMongoClient: true,
    });
}

const disconnect = () => {
    mongoose.connection.close();
}

module.exports = {
    ConnectToMailbox: connect,
    DisconnectFromMailbox: disconnect,
    Mail: Mail,
}
