const app = require('../core');
	express = require('express'),
	router = express.Router();

app.execute(function(app) {
	app.dir = path._dirname;
});

console.log('asd');

class GlobalRouter {
	constructor() {
		this.routes = [];
		this.router = router;	
	}

	register({method, endpoint, callback}) {
		this.routes.push({method, endpoint, callback})
		this.router[method](endpoint, callback);
	}

}


