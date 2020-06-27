//console.log(module);
/** events **/

const EventsEmitter = require('events');

//var name = 'vijay';

class Logger extends EventsEmitter {
	print(msg) {
		console.log(msg);

		// Raise a event
		this.emit('Log event', {id:1, name:'vijay'});
	}	
}



module.exports = Logger;