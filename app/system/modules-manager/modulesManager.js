const path = require('path');
const defaultDirectory = path.dirname(require.main.filename);
const ModulesInit = require('./modulesInitializer');
const dirMapper = require('./directoryMapper.js');



const modules = {
	mongoConfig: { 
		name: 'mongo-config',
		type: 'config',
		data: 'object',
		dependencies: [],
		dir: ''
	},
	dirMapper: {
		name: 'dir-mapper',
		type: 'helper',
		data: dirMapper,
		dependencies: [],
		dir: ''
	}
}


class Manager {
	constructor(appDir = defaultDirectory) {
		this.directory = appDir;
		this.mapperIgnore = ['node_modules', '.gitignore','.git','package-lock.json', 'package.json', 'README.md'];
		this.mapper = new dirMapper(this.directory, this.mapperIgnore);
	}

	async findModules(moduleIdentifier) {
		const result = await this.mapper.getFilesList([moduleIdentifier]);
		return result;
	}

	async registerModules(moduleIdentifier) {
		const modulesList = await this.findModules(moduleIdentifier);
		this.manager = new ModulesInit(modulesList);
		//console.log(this.manager.modules);
	}
}


const manager = new Manager();

manager.registerModules('origin');
