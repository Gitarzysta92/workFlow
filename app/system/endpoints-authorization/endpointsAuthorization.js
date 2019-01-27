const AccessModel = require('./accessModel');


class EndpointsAuthorizer {
	constructor() {
		this.accessModels = {};
		this.accessLevels = [
			{
				type: 'administrator',
				inherits: []
			},
			{
				type: 'moderator',
				inherits: ['administrator']
			},
			{
				type: 'subscriber',
				inherits: ['moderator', 'administrator']
			}
		];
		this.authorizedUsers = [];	
	}

	setAuthorization(routesList) {
		const authRoutes = [];
		const wrapped = routesList.forEach(current => {
			if (current.hasOwnProperty('access')) {
				console.log(current);
			}
			authRoutes.push(this.getAuthRoute(current));
		});
		return authRoutes.concat(routesList);
	}

	getAuthRoute(route) {
		if (route) {
			return {
				name: route.name + '-auth',
				type: 'use',
				endpoint: route.endpoint,
				controller: this.middlewareAuth
			}
		} else {
			//throw an error
		} 
	}

	setupModels() {
		this.accessLevels.forEach(current => {

		});
	}

	addAccessModel(level) {
		Object.defineProperty(this.accessModels, level.type, new AccessModel({
			name: level.type
		}));
	}


	registerUser() {

	}

	middlewareAuth(req, res, next) {
		//check user session token

		//get user session obj

		//Check is user have permissions for given route

		//Pass

		//authorization method
		console.log('Time', Date.now());
		next();
	}

}

module.exports = EndpointsAuthorizer;


