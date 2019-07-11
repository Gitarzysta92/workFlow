const Client = require('./clientWrapper');


class UnauthorizedError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "UnauthorizedError"; // (2)
  }
}


class ClientAuthorizer {
	constructor(options) {

		this.dbInstance = options || false;
		this.clientsList = [];
		this.collection = 'clientApps';
		this.addTrustedClient({
	 		appkey: 'rootkey',
	 		host: 'localhost:8080'
	 	});
	}

	//static addClient
	setAuthorization(routesList) {
		const route = {
			name: 'clientAuthorizer',
			type: 'use',
			hook: 'pre-evaluation',
			endpoint: '*',
			controller: this.authorizeClient.bind(this)
		}
		return [route, ...routesList];
	}

	async authorizeClient(req, res, next) {
		const client = this.isConnected(req.headers);
		// check is client established any connection already 
		if (client) {
			client.request = 'asd';
			next();
			return;
		}	
		// check is client have registered aplication key
		// if key are registered pass token to check host function 
		await this.checkApiKey(req.headers.appkey)
		.then(token => { 

			if (!token) throw new UnauthorizedError('Your App key is not valid');
			return token;
		})
		// check is given apiKey has assigned client host
		// if has not throw exception 
		.then(token => {
			console.log(token.host, req.headers.host)
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
	 	return await this.getClientApp({ appkey: token });
	}

	async addTrustedClient(clientObject) {
		return await this.setClientApp(clientObject);
	}

	async setClientApp(client) {
		const db = await this.dbInstance;
		return db.updateSingleIfExists(this.collection, {
			'appkey': client.appkey
		}, client);
	}

	async getClientApp(searchKey){
		const db = await this.dbInstance;
		return db.getSingle(this.collection, searchKey);
	}
}

module.exports = ClientAuthorizer;


