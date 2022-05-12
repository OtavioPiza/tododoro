const express = require('express');
const bcrypt = require('bcrypt');
const crypt = require('crypto');
const moment = require('moment');
const patternMatcher = require('../utils/patternMatcher');
const jwt = require('../utils/jwt');
const { sendVerificationCode } = require('../utils/mailer');
const tokenVerifier = require('../middleware/tokenVerifier');
const bodyVerifier = require('../middleware/bodyVerifier');
const User = require('../models/user');

const saltRounds = 8;
const authRouter = express.Router();

/**
 * registers a new user
 */
authRouter.post('/register',
  bodyVerifier(['email', 'firstName', 'lastName', 'username', 'password']),
  async (request, response) => {
    const body = request.body;

    /* check if email is valid */

    if (!patternMatcher.isEmailValid(body.email)) {
      response.status(400).send({ error: 'invalid email' });
      return;
    }

    // generate password hash and user model

    const passwordHash = await bcrypt.hash(body.password, saltRounds);
    const user = new User({
      firstName: body.firstName,
      lastName: body.lastName,
      username: body.username,
      email: body.email,
      verification: {
        code: crypt.randomInt(99999999).toString().padStart(8, '0'),
        expires: moment(new Date()).add(12, 'hours'),
        verified: false
      },
      passwordHash,
    });

    return user
      .save()
      .then((res) => {
        sendVerificationCode(user.email, user.verification.code)
          .then(() => response.status(201).send({ token: jwt.signToken(res.username, res.email, res._id) }))
          .catch(() => response.status(201).send({ token: jwt.signToken(res.username, res.email, res._id) }));
      })
      .catch((err) => response.status(400).send(err.message));
  });

/**
 * logs a user in
 */
authRouter.post('/login',
  bodyVerifier(['username', 'password']),
  async (request, response) => {
    const body = request.body;

    /* get user */

    const user = await User.findOne().where({ username: body.username });
    if (!user) {
      response.status(401).send({ error: 'wrong username or password' });
      return;
    }

    /* check password */

    const valid = await bcrypt.compare(body.password, user.passwordHash);
    if (!valid) {
      response.status(401).send({ error: 'wrong username or password' });
      return;
    }

    /* create token */

    const token = jwt.signToken(user.username, user.email, user._id);
    response.status(200).send({
      username: user.username,
      verified: user.verification.verified,
      token
    });
  });

/**
 * verifies if the user has a valid token
 */
authRouter.use(tokenVerifier);

/**
 * verifies if the user has a valid token
 */
authRouter.post('/check', async (request, response) => {
  return response.status(204).send();
});

/**
 * verifies a user
 */
authRouter.post('/verify',
  bodyVerifier(['code']),
  async (request, response) => {
    const body = request.body;
    const user = request.user;

    if (body.code !== user.verification.code) {
      response.status(403).send({ error: 'invalid code' });
      return;
    }

    if (moment(new Date()).isAfter(user.verification.expires)) {
      response.status(403).send({ error: 'code expired' });
      return;
    }

    await User.findByIdAndUpdate(user.id, {
      verification: {
        verified: true
      }
    });

    response.status(200).end();
  });

/**
 * resends email with verification code
 */
authRouter.post('/verify/resend', async (request, response) => {
  const decToken = jwt.decode(request.get('authorization'));
  const code = crypt.randomInt(99999999).toString().padStart(8, '0');

  const user = await User.findByIdAndUpdate(decToken.id, {
    verification: {
      code: code,
      expires: moment(new Date()).add(12, 'hours'),
      verified: false
    }
  });

  if (!user) {
    response.status(401).send({ error: 'this user does not exist' });
    return;
  }

  const res = await sendVerificationCode(user.email, code);

  if ('accepted' in res && res.accepted) {
    response.status(201).end();
    return;
  }

  response.status(500).end();
});

// == exports == //

module.exports = authRouter;
