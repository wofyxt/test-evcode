const { appName } = require('./config');

module.exports = function createLogger(moduleName) {
  return function log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${appName}] [${moduleName}] ${timestamp}: ${message}`);
  };
};