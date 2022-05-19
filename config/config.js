const process = require('process');

/* setup dotenv */

require('dotenv').config();

/* export */

module.exports = {
  MONGO_LOCAL: process.env.MONGO_LOCAL == 'true' ? true : false,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_HOST: process.env.MONGO_HOST,
  MONGO_OPTIONS: process.env.MONGO_OPTIONS,

  DB_USER: process.env.NODE_ENV == 'test' ? process.env.TEST_DB_USER : process.env.DB_USER,
  DB_TASK: process.env.NODE_ENV == 'test' ? process.env.TEST_DB_TASK : process.env.DB_TASK,

  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
};