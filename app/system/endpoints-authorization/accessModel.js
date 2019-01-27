class AccessModel {
	constructor(args) {
		this.modelName = args.name;
		this.permissions = [];
		this.model = [];
	}

	inheritModel(subordinate = []) {
		this.model.concat(subordinate);
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
