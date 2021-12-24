/**
 * mailer functions
 */

/* imports*/

const nodemailer = require('nodemailer');
const config = require('../config/config');

/* setup */

// fill client id and client secret

/**
 * sends an email
 *
 * @param to
 * @param cc
 * @param bcc
 * @param subject
 * @param text
 * @param html
 * @returns {Promise<*|*>}
 */
const send = async (to, cc, bcc, subject, text, html) => {

  try {

    // fill client id and client secret

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.EMAIL,
        pass: config.PASSWORD
      }
    });

    const options = {
      from: 'TodoDoro: Productivity Todo List',
      to,
      cc,
      bcc,
      subject,
      text,
      html,
    };
    return await transport.sendMail(options);

  } catch (e) {
    return e;
  }
};

/**
 * sends an email with the verification code
 *
 * @param to
 * @param code
 * @returns {Promise<void>}
 */
const sendVerificationCode = async (to, code) => {
  const emailBody = `
  Hello from TodoDoro!
  
  We are happy to have you with us! Please use the following code to verify your account:
  
  ${code}
  
  Please note the code expires in 24 hours.
  `;

  return await send(to, null, null, 'Verify your new TodoDoro account', emailBody, null);
};

/* exports */

module.exports = {
  send,
  sendVerificationCode
};