// -----------------------
// Application root object
// -----------------------

// Init module interface
// and set it type
const mod = new Mod(__filename);
mod.setType('root');


//load node modules dependencies
const express = require('express');
let	server = express();

// Private 
class Application {
	constructor() {

	}

}

const app = new Application();
// Public
mod.publish(function() {
	return app;
});

module.exports = mod;






