class Api {
	constructor(apiList) {
		for (const directiveName in apiList) {
			this.register(directiveName, apiList[directiveName]);
		}
	}

	register(key, prop) {
		this[key] = {
			value: prop,
			writable: false,
			enumerable: true
		}
	}

	get(key) {
		return key ? this[key] : this;
	};
}


class _App {
	constructor(args) {
		this._api = new Api({'a': 'asd'});
	}

	execute(callback) {
		callback(this);
	}
	
	publicMethods() {
		return {
			registerApi: this._api.register.bind(this._api),
			getApi: this._api.get.bind(this._api),
			execute: this.execute.bind(this)
		}
	}
}



module.exports = (function() {
		const _APP = new _App();
		return _APP.publicMethods();
})();



