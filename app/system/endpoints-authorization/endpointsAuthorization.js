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
				inherits: ['moderator']
			}
		];
		this.authorizedUsers = [];
		this.setupModels();
		console.log(this.accessModels);	
	}

	setAuthorization(routesList) {
		const authRoutes = [];
		const wrapped = routesList.forEach(current => {
			if (current.hasOwnProperty('access')) {
			//	console.log(current);
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
				controller: this.middlewareAuth.bind(this)
			}
		} else {
			//throw an error
		} 
	}

	setupModels() {
		this.accessLevels.forEach((elem, index, arr) => {
			let lastElem = arr[index - 1];
			if (lastElem) {
				lastElem = this.accessModels[lastElem.type];
			}
			this.addAccessModel(elem.type, lastElem);
		});
	}

	addAccessModel(level, model) {
		Object.defineProperty(this.accessModels, level, {
			value: new AccessModel({
				name: level,
				inherits: model
			}),
			writable: true
		});
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


