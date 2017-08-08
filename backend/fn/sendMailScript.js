const AWS = require('aws-sdk');

const credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;
AWS.config.update({region:'us-west-2'});

const ses = new AWS.SES();

const from = 'zach@zacharyhill.xyz';

// first second and third arguments, respectively
const sendTo = [process.argv[2]];
const subject = process.argv[3];
const messageText = process.argv[4];

ses.sendEmail({
    Source: from,
    Destination: { ToAddresses: sendTo },
    Message: {
        Subject: {
          Data: subject,
        },
        Body: {
           Text: {
               Data: messageText,
           }
        }
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
})
