import nodemailer from 'nodemailer';

import secret from '../../../../config/secrets.js';

var msgComponent = function (msgObject) {

  var sendMsg = function(msgObject) {
    // create reusable transporter object using the default SMTP transport

    var smtpTransport = nodemailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: "boazblake@gmail.com",
            pass: secret.emailPass
        }
    });

    // setup e-mail data with unicode symbols
    let senderRequest = (msgObject.checkboxMessage) ? msgObject.senderEmail : '';

    var mailOptions = {
        from:msgObject.senderEmail, // sender address
        to: `boazblake@gmail.com, ${senderRequest}`, // list of receivers
        subject:msgObject.ReasonForContacting , // Subject line
        text: msgObject.Message, // plaintext body
    };

    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
        smtpTransport.close(); // shut down the connection pool, no more messages
    });
  }
  

  return {
    sendMsg: sendMsg
  }

}

module.exports = msgComponent();