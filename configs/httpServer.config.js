// ------------------
// Http server config
// ------------------

// Init module interface
// and set it type
const mod = new Mod(__filename);
mod.setType('config');

//load node modules dependencies
const fs = require('fs');
const bodyParser = require('body-parser');


// Public
mod.publish(function() {
	const config = function(server, router) {
		server.use(bodyParser.urlencoded({ extended: false }));
		server.use(bodyParser.json());

		server.use('/', router);
		return server;
	}
	return config;
});


module.exports = mod;
	


