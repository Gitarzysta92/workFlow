const path = require('path');
const defaultDirectory = path.dirname(require.main.filename);
const interfaceDependency = require('./modulesInitializer').defaultDependency;
const ModulesInit = require('./modulesInitializer');
const dirMapper = require('./directoryMapper.js');
const dirMapperSync = require('./directoryMapperSync.js');



class Manager {
	constructor(appDir = defaultDirectory) {
		this.directory = appDir;
		this.mapperIgnore = ['node_modules', '.gitignore','.git','package-lock.json', 'package.json', 'README.md'];
		this.mapper = {};
		
	}

	async findModules(moduleIdentifier) {
		this.mapper = new dirMapper(this.directory, this.mapperIgnore);
		const result = await this.mapper.getFilesList(moduleIdentifier);
		return result;
	}

	async registerModules(moduleIdentifier) {
		const modulesList = await this.findModules(moduleIdentifier);
		this.manager = new ModulesInit(modulesList);
		return this.manager;
	}
}

class ManagerSync {
	constructor(appDir = defaultDirectory) {
		this.directory = appDir;
		this.mapperIgnore = ['node_modules', '.gitignore','.git','package-lock.json', 'package.json', 'README.md'];
		this.mapper = new dirMapperSync(this.directory, this.mapperIgnore);
		this.interf = interfaceDependency;
	}

	setDependencies(dependencies) {
		this.interf(dependencies);
	}

	findModules(moduleIdentifier) {
		const result = this.mapper.getFilesList(moduleIdentifier);
		return result;
	}

	registerModules(moduleIdentifier) {
		const modulesList = this.findModules(moduleIdentifier);
		this.manager = new ModulesInit(modulesList);
		return this.manager;
	}
}


module.exports = Manager;
module.exports.sync = ManagerSync;
