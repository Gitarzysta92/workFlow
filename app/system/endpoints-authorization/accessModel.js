class AccessModel {
	constructor(args) {
		this.modelName = args.name;
		this.permissions = [];
		this.uris = [];
		this.inheritModel(args.inherits)
	}

	inheritModel(subordinate) {
		if (subordinate) {
			//this.uris.push(subordinate.uris);
			this.permissions.push(subordinate.permissions)
		}
	}

	compare(endpoint) {
		return this.model.some(current => {
			current.path === endpoint;
		}) ;
	}

	check(request) {
		const uri = this.uris.find(current => {
			if (Array.isArray(current)) return false;
			const type = current.type === request.method.toLowerCase();
			let endpoint = '';
			if (typeof current.endpoint === 'object') {
				endpoint = current.endpoint.test(request.originalUrl.replace('//', '/'))
			} else {
				endpoint =  current.endpoint === request.originalUrl.replace('//', '/');	
			}
			if (type && endpoint) return true;
		});



		if (!uri) {
			// throw error -> wrong route matched
			return false;
		}

		// pass public function
		if (!request.hasOwnProperty('userSession') && this.modelName === 'public') {
			return true;
		}
		// throw error -> not authenticated
		if (!request.hasOwnProperty('userSession')) {
			return false;
		}


		console.log(request.userSession.token, this.permissions, this.modelName);
		

		console.log(uri);
	}

	set addToken(token) {
		this.permissions.push(token);
	}

	set removeToken(token) {
		this.permissions = this.permissions;
	}

	set add(uri) {
		const type = uri.hasOwnProperty('type');
		const endpoint = uri.hasOwnProperty('endpoint');
		if (type && endpoint) {
			this.uris.push({
				type: uri.type,
				endpoint: uri.endpoint
			});		
		} else {
			// throw error
		}
	}

	get model() {
		return this.model;
	}
}

module.exports = AccessModel;
