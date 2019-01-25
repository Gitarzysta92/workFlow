// -----------------------
// Application root object
// -----------------------
// Load and setup event emiter
const EventEmitter = require('events');
class AppEmitter extends EventEmitter {};



// ###################
// Load synchronous module manager
//

console.log('Load Database utility modules');
const Manager = require('./modules-manager').sync;
const manager = new Manager();

// Register modules with given subname
const type = ['.mongo.'];
const modules = manager.registerModules(type); 
const database = modules.getPublished({name: 'crud.mongo.js'});


// Load and setting Http request authorizer
const EndpointsAuth = require('./endpoints-authorization');

// Load client stats and authorization
const ClientAuthorizer = require('./client-authorization');



// Private 
class Application {
	constructor(setup) {
		this.eventsEmitter = new AppEmitter(); 

		// Applications consts
		this.database = database;

		// System modules
		this.filesManager = new Manager();
		this.httpAuthorizer = new EndpointsAuth();
		this.clientAuthorizer = new ClientAuthorizer(this.database);  
	}

	set add(elem) {
		this[elem.key] = elem;
	}

}




module.exports = Application;


