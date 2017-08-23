const { Mail } = require('../config/MailModel.js');

function markAsRead (id) {
    Mail.findByIdAndUpdate(
        id,
        { $set: { unread: false } },
        function(err) {
            if (err) {
                console.log(err);
            }
        }
    );
}

module.exports = markAsRead;
