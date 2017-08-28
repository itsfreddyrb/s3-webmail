const AWS = require('aws-sdk');
const promisify = require('util').promisify;

const credentials = new AWS.SharedIniFileCredentials({
    profile: 'default'
});
AWS.config.credentials = credentials;
AWS.config.update({
    region: 'us-west-2',
});
const ses = new AWS.SES();
ses.sendEmail = promisify(ses.sendEmail);

module.exports = (mailObj) => {
    return new Promise((fulfill, reject) => {
        ses.sendEmail({
            Source: mailObj.from,
            Destination: {
                ToAddresses: mailObj.to,
                CcAddresses: mailObj.cc,
                BccAddresses: mailObj.bcc,
            },
            Message: {
                Subject: {
                    Data: mailObj.subject,
                },
                Body: {
                    Text: {
                        Data: mailObj.text,
                    }
                }
            }
        })
        .then((data) => {
            fulfill(data.MessageId);
        })
        .catch((err) => {
            reject(err);
        });
    })
};
