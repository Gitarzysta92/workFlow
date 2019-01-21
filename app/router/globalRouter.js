// ------------------
// Global router
// ------------------

// Setup express router



class GlobalRouter {
	constructor(emiter, express) {
		this.routes = [];
		this.router = express.Router();
		this.httpRequest = emiter;
		this.event = 'http-request';

	}
	// pass express router module
	getRouterInstance() {
		return this.router;
	}

	prepareEmitter(subject) {
		return function(req, res, next) {
			this.httpRequest.emit(this.event, subject, req, res, next);	
		}.bind(this);
	}
	//
	// add single route
	// input: route object 
	// set controller execute function
	//
	registerRoute(route) {
		if (route.endpoint === undefined) {
			this.router[route.type](this.prepareEmitter(route.controller));
		} else {
			this.router[route.type](route.endpoint, this.prepareEmitter(route.controller));	
		}
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
		const result = array.find(current => {
			if (current.type === route.type && 
				current.endpoint === route.endpoint) return true;
		});

		if (result) {
			console.log('Route with given endpoint already exist', result.endpoint);
			return;
		}

		const routeObject = {
			type: route.type,
			endpoint: route.endpoint,
			controller: route.controller
		}
		array.push(routeObject);
	}

}

module.exports = GlobalRouter;


