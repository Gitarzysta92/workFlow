// ------------------
// Global router
// ------------------

// Setup express router

class MainController {
	constructor() {
	}

	run(routeObject) {
		const route = routeObject;
		return this.func.bind(route);
	}
	func(req, res, next) {
		console.log('wejscie',this);
	}
}

module.exports = MainController;


