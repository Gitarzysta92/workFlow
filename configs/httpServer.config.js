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
const hbs = require('express-handlebars');
const path = require('path');


// Public
mod.publish(function() {
	const rootDir = this.rootDirectory;
	const config = function(server, router) {
		server.use(bodyParser.urlencoded({ extended: false }));
		server.use(bodyParser.json());

		// handlebars setup - render and template engine
		server.set('views', path.join(rootDir, 'public/views'));
		server.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: rootDir + '/public/views/layouts' }));
		server.set('view engine', 'hbs');

		server.use('/', router);
		return server;
	}
	return config;
});


module.exports = mod;
	


