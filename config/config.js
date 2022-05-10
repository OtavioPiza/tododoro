const process = require('process');

/* setup dotenv */

require('dotenv').config();

/* export */

module.exports = {
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_HOST: process.env.MONGO_HOST,
  MONGO_OPTIONS: process.env.MONGO_OPTIONS,

  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
};