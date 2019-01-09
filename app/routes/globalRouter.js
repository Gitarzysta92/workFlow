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
	}

	register({method, endpoint, callback}) {
		this.routes.push({method, endpoint, callback})
		this.router[method](endpoint, callback);
	}

	getRouter() {
		return this.router;
	}
}

module.exports = GlobalRouter;


