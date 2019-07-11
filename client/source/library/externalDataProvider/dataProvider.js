import { apiCaller } from 'Utils';


const defaultHeaders = { 'Content-Type': 'application/json' }
const defaultUrl = 'http://localhost:3000';


class ApiCaller {
	constructor({headers = defaultHeaders, url = defaultUrl } = {}) {
		this._callerConstants = {
			headers: { ...headers },
			url: url
		};
		this._callerPresets = {};

		return {
			createCaller: this.createCaller.bind(this),
			getCaller: this.callApi.bind(this),
			setHeaderProperty: this.setHeaderProperty.bind(this),
			getCallerPresets: this.getCallerPresets.bind(this)
		}
	}

	callApi(name, data) {
		const caller = this._callerPresets[name];
		return caller(data);
	}

	createCaller(name, {endpoint, method}) {
		const { headers, url } = this._callerConstants;
		const preparedUri = `${url}/${endpoint}`;
		const caller = this._createCallerPreset({method, headers, preparedUri});
		this._addCallerPreset(name, caller);
		return caller;
	}

	getCallerPresets() {
		return this._callerPresets;
	}

	setHeaderProperty(prop) {
		let { headers } = this._callerConstants; 
		headers = Object.assign(headers, prop);
	}

	_addCallerPreset(name, definedCaller) {
		Object.defineProperty(this._callerPresets, [name], {
			value: definedCaller,
			writable: false,
			enumerable: true
		})
	}

	_createCallerPreset(params) {
		return function(data) {
			const { method, headers, preparedUri } = params; 
			return apiCaller(method, headers, data, preparedUri);		
		}
	}
}

const DataProvider = {};

DataProvider.init = function(params) {
	const apiCaller = new ApiCaller(params);
	return apiCaller
}


export default DataProvider;

/**

app.newApi('dataProvider', {
	init: function() {

	}
});

**/