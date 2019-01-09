// ------------------
// Global router
// ------------------

// Setup express router
const express = require('express');
const router = express.Router();

router.use(function timelog (req, res, next) {
	console.log('Time', Date.now());
	next();
});


class GlobalRouter {
	constructor() {
		this.routes = [];
		this.router = router;
		this.controller = {}; 
	}

	getRouter() {
		return this.router;
	}

	registerRoutes(routesList) {
		routesList.forEach(route => {
			if (typeof route.controller === 'function') {
				const preparedEndpoints = this.controller(route);
				this.router[route.type](route.endpoint, preparedEndpoints);
			}
		});
	}

	connect(controllerObj) {
		this.controller = controllerObj;
	}

	setRoutes(routesArray) {
		const flatArray = [];
		routesArray.forEach(current => {
			if (Array.isArray(current)) {
				current.forEach(current => flatArray.push(current))
			} else if (typeof current === 'object') {
				flatArray.push(current);
			}
		});
		this.routes = flatArray;
		this.registerRoutes(this.routes);
	}
}

module.exports = GlobalRouter;


