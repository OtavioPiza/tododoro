/**
 * This middleware verifies if a request body has all the required parameters
 * 
 * @param {[String]} requiredParams - array of required parameters
 * @returns 
 */
const bodyVerifier = (requiredParams) => (req, res, next) => {
  const body = req.body;
  const missingParams = requiredParams.filter(param => !(param in body));

  if (missingParams.length > 0) {
    res.status(400).send({ error: `Missing required parameters: ${missingParams.join(', ')}` });
    return;
  }
  next();
};

/* Export */

module.exports = bodyVerifier;