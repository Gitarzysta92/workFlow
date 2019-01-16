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
	constructor(emiter) {
		this.routes = [];
		this.router = router;
		this.httpRequest = emiter;

	}
	// pass express router module
	getRouterInstance() {
		return this.router;
	}

	prepareEmitter(eventName, subject) {
		return function(req, res) {
			const event = eventName;
			const args = subject;
			this.httpRequest.emit(event, args, req, res);

		}.bind(this);
	}
	//
	// add single route
	// input: route object 
	// set controller execute function
	//
	registerRoute(route) {
		const preparedEmitter = this.prepareEmitter(route.endpoint, route.type);
		this.router[route.type](route.endpoint, preparedEmitter);
		//Log all registered routes
		console.log('Route:', route.endpoint, 'Type:', route.type, 'is ready.');
	}

	//
	// add all given routes
	// input: array of route objects
	//
	registerRoutes(routesList) {
		routesList.forEach(route => {
			this.registerRoute(route);	
		});
	}

	//
	// set or overwrite routes
	// input array: route objects
	// 
	setRoutes(routesArray) {
		const flatArray = [];
		routesArray.forEach(current => {
			if (Array.isArray(current)) {
				current.forEach(current => {		
					this.setRoute(flatArray, current);
				});
			} else if (typeof current === 'object') {
				this.setRoute(flatArray, current);		
			}
		});
		this.routes = flatArray;
		this.registerRoutes(this.routes);
	}

	//
	// set route 
	// input object:
	// name:, type:, endpoint:, content:
	//
	setRoute(array, route) {
		const controllerObject = {
			name: route.name,
			controllers: route.controller
		}

		const result = array.find(current => {
			if (current.type === route.type && 
				current.endpoint === route.endpoint) return true;
		});

		if (result) {
			result.controllers.push(controllerObject)
			return null;
		}

		const routeObject = {
			type: route.type,
			endpoint: route.endpoint,
			controllers: [controllerObject]
		}
		array.push(routeObject);
	}

}

module.exports = GlobalRouter;


