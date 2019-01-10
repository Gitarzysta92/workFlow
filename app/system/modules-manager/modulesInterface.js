const path = require('path');
const defaultDirectory = path.dirname(require.main.filename);


const modules = {
	set list(list) {
	},
	list: []
};
class ModuleInterface {
	constructor(fileName) {
		this.id = this.uniqueId(10);
		this.name = this.setName(fileName);
		this.type = this.setType(fileName) || 'None';
		this.published = {};
		this.initDate = Date.now();
		this.dependency = [];
		this._dependencyQuery = [];
		this.constructor.saveInstance(this);
		this.temp = {};
		this.rootDirectory = defaultDirectory.split('\\').join('/');
	}

	static saveInstance(instance) {
		modules.list.push(instance);
	}

	publish(code) {
		this.temp = code;
	}

	ready() {
		const imported = this.dependency.map(current => current.published);
		if (typeof this.temp === 'function') {
			this.published = this.temp.apply(this, imported);
		}
		console.log(this.name, 'is ready');
	}

	init(args) {
		this.dependency = args;
		return this;
	}

	expect(queryObject) {
		this._dependencyQuery.push(queryObject);
	}

	subscribe(exported) {
		 this.published.push(exported);
	}

	setType(fileName) {
		const nameArr = fileName.split('.');
		if (nameArr.length > 2) {
			return nameArr[nameArr.length -2];	
		}
		return undefined;
	}


	setName(dir) {
		const dirArray = dir.split('\\');
		return dirArray[dirArray.length -1];
	}
	
	addDependency(depenency) {
		this.dependency.push(depenency);
	}
	
	findDependency(dependenciesArray, toFind) {
		return dependenciesArray.filter(current => { });
	}

	setProperty(prop) {
		this.emmiter = prop;
	}
	toArray(object) {
		const array = [];
		for (let key in object) {
			array.push(object[key]);
		}
		return array;
	}

	uniqueId(){
		let signs = 'abcdefghijklmnoprstwyz123456789',
			id = [];
		for (let i = 0; i < 10; i++) {
			let rand = Math.floor(Math.random() * signs.length);
			id.push(signs.charAt(rand));
		}
		return id.join('');
	}
}

module.exports = ModuleInterface;

module.exports.setting = function(setup) {
	modules.list = setup;
	return 'asd';
}