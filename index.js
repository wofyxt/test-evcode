const createLogger = require('./logger');
const { scheduleTask } = require('./scheduler');

const log = createLogger('main');

log('Приложение запущено');

scheduleTask('heartbeat', 10000, () => {
  console.log('running');
});