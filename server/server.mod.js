// ------------------
// Simple http server
// ------------------

// Init module interface
// and set it type
const mod = new Mod(__filename);
mod.setType('service');

//load module manager dependencies
mod.expect({name: 'httpServer.config.js'});

// Public
mod.publish(function(config) {
	const serverInit = function(port, router, server) {
		server = config(server, router);
		server.listen(port, () => console.log('Server listening on port ' + port));	
	}
	return serverInit;
});

module.exports = mod;
	




