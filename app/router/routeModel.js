// ------------------
// Route model
// ------------------

// Setup single route
class Route {
	constructor(singleRoute) {
		this.name = singleRoute.name || 'Default';
		this.type = singleRoute.type || 'get';
		this.access = singleRoute.access || 'subscriber';
		this.endpoint = singleRoute.endpoint || '/';
		this.callbacks = { 'pre-execution': []}

	}

}

module.exports = Route;


