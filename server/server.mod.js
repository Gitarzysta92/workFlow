// ------------------
// Simple http server
// ------------------

// Init module interface
// and set it type
const mod = new Mod(__filename);
mod.setType('service');


//load node modules dependencies
const express = require('express');
let	server = express();

//load module manager dependencies
mod.expect({name: 'httpServer.config.js'});

// Public
mod.publish(function(config) {
	const serverInit = function(port, router) {
		server = config(server, router);
		server.listen(port, () => console.log('Server listening on port ' + port));	
	}
	return serverInit;
});

module.exports = mod;
	




