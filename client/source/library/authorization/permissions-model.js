
class Permissions {
	constructor(paths) {
		this.model = {};
		this.setup(paths);
	}

	addAccess({userType, uri}) {
		const userModel = this._addUser(userType);
		if (this._checkIsUriExists(userModel, uri)) throw new Error('Given uri '+ uri +' already exists in model');

		this.model[userType] = [uri, ...userModel];
	}

	setup(pathsModel) {
		for (let key in pathsModel) {
			const userType = pathsModel[key].permission;
			const uri = pathsModel[key].uri;
			this.addAccess({userType, uri});	
		}
		return this.model;
	}
	_checkIsUriExists(userType, uri) {
		return userType.find(current => current === uri); 
	}
	_addUser(userType) {
		if (!typeof userType === 'string') throw new Error('Given user type is ' + userType + ' instead of string');
		if (!this.model.hasOwnProperty(userType)) {
			Object.defineProperty(this.model, userType, {
				value: [],
				writable: true,
				enumerable: true,
			})
		}
		return this.model[userType];
	}
}

export default Permissions;
