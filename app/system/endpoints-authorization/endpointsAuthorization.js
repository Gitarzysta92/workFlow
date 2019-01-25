const AccessModel = require('./accessModel');



const first = [
	{
		type: 'get',
		endpoint: '/home'
	}
]

// routes permissions with inherit

const second = [
	{

	},
...first]


const third = [
	{

	},
...second]


class EndpointsAuthorizer {
	constructor() {
		this.accessModel = [];
	}

	setAuthorization(routesList) {
		const authRoutes = [];
		const wrapped = routesList.forEach(current => {
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

	addAccessModel() {
		const model = new AccessModel();
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


