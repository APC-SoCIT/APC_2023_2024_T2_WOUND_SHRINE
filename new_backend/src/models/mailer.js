const TAG = '[Help Center]';
const mailer = require('nodemailer');
const logger = require('../core/logger');
const { response, INTERNAL_SERVER_ERROR } = require('../core/response');

module.exports.sendMail = (body) => {
  const ACTION = '[Send mail]';
  logger.log('info', `${TAG}${ACTION}`, { body });

  // Assuming your body parameter is in JSON format like {"body": {...}}
  const mailOptions = body;

  return new Promise((resolve, reject) => {
    const transport = mailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASSWORD
      }
    });

    transport.sendMail(mailOptions)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        console.error(err);
        reject(response(INTERNAL_SERVER_ERROR));
      });
  });
};