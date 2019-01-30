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
			},
			{
				type: 'public',
				inherits: ['subscriber']
			}
		];
		this.authorizedUsers = [];
		this.setupModels();
	}


	// 
	// Set authorization method for each given path
	// takes: routes array
	setAuthorization(routesList) {
		const authRoutes = [];
		const wrapped = routesList.forEach(current => {
			if (current.hasOwnProperty('access')) {
				if (this.accessModels.hasOwnProperty(current.access)) {
					const model = this.accessModels[current.access];
					model.add = current;
					authRoutes.push(this.createAuthRoute(current, model));
				} else {
					// throw error
				}
			}
		});
		return authRoutes.concat(routesList);
	}

	createAuthRoute(route, authModel) {
		if (route) {
			return {
				name: route.name + '-auth',
				type: 'use',
				hook: 'authorization',
				endpoint: route.endpoint,
				controller: this.middlewareAuth(authModel)
			}
		} else {
			//throw an error
		} 
	}

	middlewareAuth(authModel) {
		return function(req, res, next) {
			if (req.hasOwnProperty('route')) {
				//throw error
				next();
				return;
			}
			const authorization = authModel;
			authorization.check(req);
			next();
		}.bind(this);	
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



}

module.exports = EndpointsAuthorizer;


