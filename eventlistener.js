
const EventsEmitter = require('events');


const Logger = require('./eventlogger');
const logger = new Logger();

// Register a listener
logger.on('Log event', (arg) => {
	console.log('Listener called', arg);
});

logger.print('vijay');



