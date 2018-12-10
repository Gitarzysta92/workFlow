const service = require('../userService');
const app = require('../../../core');

module.exports = {
	getUser,
	registerUser,
	authenticateUser
}

console.log(app)

function getUser(req, res, next) {
	service.getUser(req.params.name).then(userData => res.send(userData));
}

function registerUser(req, res, next) {
	app.registerUser(req.body).then(added => res.send(added));
}

function authenticateUser(req, res, next) {
	app.authenticateUser(req.body).then(session => res.send(session.getToken()));
}

/*
app.registerAction({
		initiator: {
			type: 'http',
			request: req,
			response: res
			},
		context: this,
		permissionNeeded: true,
		execution: route.getUser
	})

	*/