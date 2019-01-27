// ------------------
// Global router
// ------------------

// Setup express router



class GlobalRouter {
	constructor(controller, express) {
		this.routes = [];
		this.router = express.Router();
		this.midWare = express();
		this.pepareController = controller;
		this.middlewareHooks = {
			'pre-evaluation': [],
			'setting-request': [],
			'authorization': [],
			'authorized': [],
			'error-handling': []
		}
	}
	// pass express router module
	getRouterInstance() {
		return this.router;
	}

	//
	// add all given routes
	// input: array of route objects
	//
	registerRoutes() {
		this.routes.forEach(route => {
			this.register(route);	
		});
	}

	//
	// add single route or middleware
	// input: route object 
	// set controller execute function
	//
	// TO DO: refator that part
	//
	register(route) {
		if (route.type === 'use' && route.endpoint === undefined) {
			this.midWare[route.type](this.pepareController(route.controller));
		} else {
			this.router[route.type](route.endpoint, this.pepareController(route.controller));	
		}
		//Log all registered routes
		console.log('Route:', route.name, route.endpoint, 'Method:', route.type, 'is ready.');
	}

	registerMiddlewares() {
		const list = this.middlewareHooks;
		for (const key in list) {
			list[key].forEach(middleware => {
				this.register(middleware)
			});
		}
	}

	registerMiddleware(key) {
		const list = this.middlewareHooks[key];
		list.forEach(middleware => {
			this.register(middleware)
		});
	}
	//
	// set or overwrite routes
	// input array: route objects
	// 
	setRoutes(routesArray) {
		routesArray.forEach(current => {
			const checkResult = this.checkRouteAndType(current);
			if (checkResult === 'route') {
				this.addRoute(current);
			} else if (checkResult === 'middleware') {
				this.addMiddleware(current);
			} else {
				// throw error -> given route is incorrect
			}
		});
		//this.registerMiddlewares();
		this.registerMiddleware('pre-evaluation');
		this.registerMiddleware('setting-request');
		this.registerMiddleware('authorization');
		this.registerMiddleware('authorized');
		this.registerRoutes();
		this.registerMiddleware('error-handling');
	}

	checkRouteAndType(route) {
		const name = route.hasOwnProperty('name');
		const type = route.hasOwnProperty('type');
		const endpoint = route.hasOwnProperty('endpoint');

		if (!name && !type && !endpoint) return false;
		if (route.type === 'use') {
			const hook = route.hasOwnProperty('hook');
			return hook ? 'middleware' : false
		} else {
			return 'route';
		}
	}

	//
	// set route 
	// input object:
	// name:, type:, endpoint:, content:
	//
	addRoute(route) {
		const result = this.routes.find(current => {
			if (current.type === route.type && 
				current.endpoint === route.endpoint) return true;
		});

		if (result) {
			console.log('Route with given endpoint already exist', result.endpoint);
			// throw error
			return;
		}
		const routeObject = {
			name: route.name,
			type: route.type,
			endpoint: route.endpoint,
			controller: route.controller
		}
		this.routes.push(routeObject);
	}

	addMiddleware(route) {
		const hook = this.middlewareHooks.hasOwnProperty(route.hook);
		if (!hook) {
			// throw error -> given hook is not matched
			return; 
		}
		this.middlewareHooks[route.hook].push(route);	
	}

}

module.exports = GlobalRouter;


