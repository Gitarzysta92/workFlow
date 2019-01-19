class Authorizer {
	constructor() {
		this.accessModel = {}
	}

	setAuthorization(routesList) {
		const authRoutes = [];
		const wrapped = routesList.forEach(current => {
			authRoutes.push(this.getAuthRoute(current));
		});
		return routesList.concat(authRoutes);
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
		console.log('Time', Date.now());
		next();
	}

}



/*

*/


module.exports = Authorizer;


