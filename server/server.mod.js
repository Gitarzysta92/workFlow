// ------------------
// Simple http server
// ------------------

// Init module interface
// and set it type
const mod = new Mod(__filename);

// Public
mod.publish(function(config) {
	const serverInit = function(port, server) {
		server.listen(port, () => console.log('Server listening on port ' + port));	
	}
	return serverInit;
});

module.exports = mod;
	




