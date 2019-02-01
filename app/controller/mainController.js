// ------------------
// Global router
// ------------------

// Setup express router
const Service = require('./service.js');

class MainController {
	constructor(emiter) {
		this.proceed = emiter;
		this.requestsLog = [];
		this.services = {};
	}

	wrapLocalControllers(routes) {
		routes.map(current => {
			const setup = {
				name: current.name,
				controller: current.controller
			}
			const service = new Service(setup, this.requestsLog);
			Object.defineProperty(this.services, setup.name, {
				value: service,
				writable: false
			});
			return current.controller = this.wrapper(service);
		});
		console.log(this.services);
	}

	// sprawdzenie czy zostało wysłane zapytanie poprzez middleware przed wykonaniem obecnego 

	wrapper(serviceObject) {
		return function(req, res, next) {
			const user = req.hasOwnProperty('userSession') ? req.userSession : 'Not registered';
			const service = serviceObject;
			const exact = service.request(user);

			if (exact.constructor.name === 'AsyncFunction') {
				exact(req, res, next).catch(next);	
			} else {
				try {
					exact(req, res, next);
				} catch(err) {
					next(err);
				}
			}
			console.log(this.requestsLog, req.headers);
		}.bind(this);
	}
}

module.exports = MainController;


