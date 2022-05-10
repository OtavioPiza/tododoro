const mongoose = require('mongoose');
const config = require('./config');
const logger = require('../utils/logger');

/* setup database */

/**
 * Connects to the mongo database
 * 
 * @param {String} database database name
 * @returns connection to database
 */
const connect = (database) => (
  mongoose.createConnection(
    `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}/${database}?${config.MONGO_OPTIONS}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error, res) => {
      if (error) {
        logger.error(error);
        throw error;

      } else {
        logger.info('connected to mongo: ' + database);
        return res;
      }
    }
  )
);

/* exports */

module.exports = { connect };