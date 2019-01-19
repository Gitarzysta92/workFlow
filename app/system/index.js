// -----------------------
// Application root object
// -----------------------
// Load and setup event emiter
const EventEmitter = require('events');
class AppEmitter extends EventEmitter {};



// Private 
class Application {
	constructor() {
		this.eventsEmitter = new AppEmitter(); 
	}

	set add(elem) {
		this[elem.key] = elem;
	}

}




module.exports = Application;


