// ------------------
// Global router
// ------------------

// Setup express router

class MainController {
	constructor(emiter) {
		this.proceed = emiter;


	}

	// sprawdzenie czy zostało wysłane zapytanie poprzez middleware przed wykonaniem obecnego 

	wrapper(func) {
		return function(req, res, next) {
			const controller = func;
			if (controller.constructor.name === 'AsyncFunction') {
				controller(req, res, next).catch(next);	
			} else {
				try {
					controller(req, res, next);
				} catch(err) {
					next(err);
				}
				
			}
		}
	}
}

module.exports = MainController;


