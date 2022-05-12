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
  
  /* get and parse token */
  
  const token = request.get('authorization');

  if (!token || !jwt.verifyToken(token)) {
    response.status(401).send({ error: 'Invalid or missing token!' }).end();
    return;
  }

  const decoded = jwt.decode(token);

  /* find user associated with that token */

  const user = await User.findById(decoded.id);

  if (!user) {
    response.status(401).send({ error: 'There is no user associated with that account!' }).end();
    return;
  }

  /* clean up and store user object in request */

  user.id = user._id;
  delete user._id;
  delete user.__v;

  request.user = user;
  next();
};

/* exports */

module.exports = tokenVerifier;