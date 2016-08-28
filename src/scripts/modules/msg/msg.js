// var email   = require("../../../../node_modules/emailjs/email");
import email from "emailjs";

import secret from '../../../../config/secrets.js';

var msgComponent = function (msgObject) {

  var sendMsg = function(msgObject) {

    var server = email.server.connect({
       user:    "boazblake@gmail.com", 
       password: secret.emailPass, 
       host:    "smtp.gmail.com", 
       ssl:     false
    });

    let senderRequest = (msgObject.checkboxMessage) ? msgObject.senderEmail : '';

    var completeMessage = {
        from:msgObject.senderEmail, // sender address
        to: `boazblake@gmail.com, ${senderRequest}`, // list of receivers
        subject:msgObject.ReasonForContacting , // Subject line
        text: msgObject.Message, // plaintext body
    };

    // send the message and get a callback with an error or details of the message that was sent
    server.send(completeMessage, function(err, message) { console.log(err || message); });
  }
  
  return {
    sendMsg: sendMsg
  }

}

module.exports = msgComponent();