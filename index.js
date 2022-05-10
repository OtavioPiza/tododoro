const config = require('./config/config'); // access env vars
const http = require('http');
const app = require('./app');
const logger = require('./utils/logger'); // log info

/* create http server */

http.createServer(app).listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
