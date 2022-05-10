/**
 * Contains the functions for logging server activity
 *
 * @version 1.0.0
 * @author Otavio Sartorelli de Toledo Piza
 */

/* imports */

/**
 * logs info
 *
 * @param params
 */
const info = (...params) => {
  console.log(...params);
};

/**
 * logs an error
 *
 * @param params
 */
const error = (...params) => {
  console.error(...params);
};

/* exports */

module.exports = {
  info,
  error,
};