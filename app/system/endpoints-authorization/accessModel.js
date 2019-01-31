class AccessModel {
	constructor(args) {
		this.modelName = args.name;
		this.permissions = [];
		this.inheritModel(args.inherits)
	}

	inheritModel(subordinate) {
		if (subordinate) {
			this.permissions.push(subordinate.permissions)
		}
	}

	compare(endpoint) {
		return this.model.some(current => {
			current.path === endpoint;
		}) ;
	}

	check(request) {
		const result = this.permissions.find(current => {
			return current === request.userSession.token;
		})
		if (!result) return false
		return true;
	}

	set addToken(token) {
		this.permissions.push(token);
	}

	set removeToken(token) {
		this.permissions = this.permissions;
	}

	get model() {
		return this.model;
	}
}

module.exports = AccessModel;
