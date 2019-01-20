


class Client {
	constructor(options) {
		this.dbInstance = options.db || false;
		this.connectedClients = [];
		this.collection = 'clientApps';

	}
}

module.exports = Client;


