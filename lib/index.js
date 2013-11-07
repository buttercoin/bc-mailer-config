'use strict'
var nodemailer, fs;

nodemailer = require("nodemailer");
fs         = require("fs");

module.exports = function(options) {
  var mailer, send, transport;
  transport = nodemailer.createTransport(options.type, options.transport);
  send = function(mail) {
    return transport.sendMail(mail, function(error, response) {
      if (error != null) {
        return console.log(error);
      } else {
        return console.log("Message sent: " + response.message);
      }
    });
  };
  return mailer = function(req, res, next) {
    res.mailer = {
      send: send
    };
    return next();
  };
};
