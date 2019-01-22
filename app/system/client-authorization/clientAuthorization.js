const Client = require('./clientWrapper');


class UnauthorizedError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "UnauthorizedError"; // (2)
  }
}


class ClientAuthorizer {
	constructor(options) {
		this.dbInstance = options.db || false;
		this.clientsList = [];
		this.collection = 'clientApps';

	}

	//static addClient
	setAuthorization(routesList) {
		const route = {
			name: 'clientAuthorizer',
			type: 'use',
			endpoint: '*',
			controller: this.authorizeClient.bind(this)
		}
		return [route, ...routesList];
	}

	async authorizeClient(req, res, next) {
		const client = this.isConnected(req.headers);

		// check is client establish connection 
		if (client) next();
			
		// check is client have registered aplication key
		// if have push it to connected list
		return this.checkApiKey(req.headers.appkey)
		.then(token => { 
			if (!token) throw new UnauthorizedError('Your App key is not valid');
			return token;
		})
		.then(token => {
			if (token.host === req.headers.host) {
				this.clientsList.push(new Client(req.headers));
				next();
			} else {
				throw new UnauthorizedError('Your host is not authorized'); 
			}
		})
	}

	isConnected(headers) {
		if (headers.host && headers.appkey) {
			return this.clientsList.find(current => {
				if ( current.host === headers.host && current.appkey === headers.appkey ) return current;
			})
		}
	}

	async checkApiKey(token) {
		if (!token) return null;
	 	//return await this.getClientApp({token}); 
	 	return {
	 		appkey: 'rootkey',
	 		host: 'localhost:3000'
	 	}
	 	//return null;
	}

	async getClientApp(searchKey){
		const db = await this.dbInstance;
		return db.getSingle(this.collection, searchKey);
	}
}

module.exports = ClientAuthorizer;


