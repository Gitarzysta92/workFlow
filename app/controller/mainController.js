// ------------------
// Global router
// ------------------

// Setup express router

class MainController {
	constructor(emiter) {
		this.proceed = emiter;

		this.proceed.on('http-request', (args, req, res, next) => {
			if (args.constructor.name === 'AsyncFunction') {
				args(req, res).catch(next);	
			} else {

			}
		});

	}

	// sprawdzenie czy zostało wysłane zapytanie poprzez middleware przed wykonaniem obecnego 

	prepare(routeObject) {
		const route = routeObject;
		return this.execute.bind(route);
	}
	execute(req, res, next) {
		console.log('wejscie', this);
		this.forEach(current => current.controllers(req, res));s
	}
}

module.exports = MainController;


