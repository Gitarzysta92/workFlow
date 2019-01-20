class ClientAuthorizer {
	constructor() {
		this.accessModel = {}
	}

	setAuthorization(routesList) {
		const route = {
			name: 'clientAuthorizer',
			type: 'use',
			endpoint: '*',
			controller: this.authorizeClient
		}
		return [route, ...routesList];
	}

	authorizeClient(req, res, next) {
		console.log('Connection from ', req.headers)
	}
}


module.exports = ClientAuthorizer;


