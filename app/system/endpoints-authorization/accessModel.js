class AccessModel {
	constructor(args) {
		this.modelName = args.name;
		this.permissions = [];
		this.uris = [];
		this.inheritModel(args.inherits)

	}

	inheritModel(subordinate) {
		if (subordinate) {
			this.uris.push(subordinate.uris);
			this.permissions.push(subordinate.permissions)
		}
	}

	compare(endpoint) {
		return this.model.some(current => {
			current.path === endpoint;
		}) ;
	}

	set add(endpoint) {
		this.model.push(endpoint);
	}

	set addAll(endpoints) {
		this.model.concat(endpoints);
	}

	get model() {
		return this.model;
	}
}

module.exports = AccessModel;
