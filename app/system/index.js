// -----------------------
// Application root object
// -----------------------
// Load and setup event emiter
const EventEmitter = require('events');
class AppEmitter extends EventEmitter {};
const path = require('path');
const rootDirectory = path.dirname(require.main.filename);


// ###################
// Load files manager 
const FilesManager = require('./files-manager');

// Load synchronous module manager
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
		this.publicDir = `${rootDirectory}/public`

		// Application constants
		this.database = database;

		// System modules
		this.eventsEmitter = new AppEmitter(); 
		this.filesManager = new FilesManager(this.publicDir);
		this.modulesManager = new Manager();
		this.httpAuthorizer = new EndpointsAuth();
		this.clientAuthorizer = new ClientAuthorizer(this.database);  
	}

	set add(elem) {
		this[elem.key] = elem;
	}

	addDependency(name, object) {
		Object.defineProperty(this, name, {
			value: object,
			writable: false,
			enumerable: true
		})
	}

}

module.exports = Application;


