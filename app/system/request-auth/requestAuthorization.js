class Authorizer {
	constructor() {
		this.accessModel = {}
	}

	wrap(routesList) {
		const authRoutes = [];
		const wrapped = routesList.map(current => {
			const toWrap = current.controller
			current.controller = function() {
				return toWrap;
			}
			authRoutes.push(this.getAuthRoute(current));
			return current;
		});

		return wrapped.concat(authRoutes);
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

	middlewareAuth() {
		//authorization method
	}

}


module.exports = Authorizer;


