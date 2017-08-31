const fs = require('fs');
const { Mail } = require('../config/MailModel.js');

function offerFileForDownload (contentId) {
  return new Promise((fulfill, reject) => {
    Mail.find({
      attachments: {
        $exists: true,
        $not: {$size: 0},
      }
    }, (err, docs) => {
      if (!err) {
        docs.map((doc) => {
          doc.attachments.map((attachment) => {
            if (attachment.cid === contentId) {
              fs.writeFile(`./attachments/${attachment.cid}`, attachment.content, (err) => {
                if (err) {
                  console.log('error saving attachment', err);
                  reject(err);
                }
                else {
                  const fileObj = {
                    path: `./attachments/${attachment.cid}`,
                    filename: attachment.filename,
                  };
                  fulfill(fileObj);
                }
              });
            }
          });
        });
      }
      else {
        console.log('rejected with err', err);
        reject(err);
      }
    });
  });

}

module.exports = offerFileForDownload;
