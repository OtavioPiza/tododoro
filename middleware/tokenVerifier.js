const User = require('../models/user');
const jwt = require('../utils/jwt');

/* middleware */

/**
 * verfies if a token is valid
 *
 * @param request
 * @param response
 * @param next
 */
const tokenVerifier = async (request, response, next) => {
  const token = request.get('authorization');

  if (!token || !jwt.verifyToken(token)) {
    response.status(401).end();
    return;
  }

  const decoded = jwt.decode(token);
  const user = await User.findById(decoded.id);

  if (!user) {
    response.status(401).end();
    return;
  }

  request.user = user;

  next();
};

/* exports */

module.exports = tokenVerifier;