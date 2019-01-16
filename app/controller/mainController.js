// ------------------
// Global router
// ------------------

// Setup express router

class MainController {
	constructor(emiter) {
		this.proceed = emiter;

		this.proceed.on('/home', (args, req, res) => {
  			res.send('dupa');
		});

	}

	// sprawdzenie czy zostało wysłane zapytanie poprzez middleware przed wykonaniem obecnego 

	prepare(routeObject) {
		const route = routeObject;
		return this.execute.bind(route);
	}
	execute(req, res, next) {
		console.log('wejscie', this);
		this.forEach(current => current.controllers(req, res));
	}
}

module.exports = MainController;


