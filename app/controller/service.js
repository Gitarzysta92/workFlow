

class Service {
	constructor(service, log) {
		this.id = '';
		this.name = service.name;
		this.func = service.controller;

		this.executionLog = log;
	}

	request(user) {
		this.log(user);
		return this.func;
	}

	log(user) {
		this.executionLog.push(this.logInfo(user));
	}

	logInfo(user) {
		return {
			user: user,
			service: this.name,
			//function: this.func.name
		}
	}

}

module.exports = Service;


