const interfaceDirectory = require.resolve('./modulesInterface.js');
const modulesInterface = require('./modulesInterface.js').setting;
const Module = require('module');



(function(moduleWrapper) {
	Module.wrap = function(script) {
		const moduleInterface = interfaceDirectory.replace(/\\/g, '/');
		script = 'const Mod = require(\''+ moduleInterface +'\');'
		+ script;
		return moduleWrapper(script);		
	};
}(Module.wrap));



class ModulesInitializer  {
	constructor(filesList) {
		this.modules = [];
		this.stack = [];
		this.load(filesList);
	}

	// Modules initializer API
	getModule(query) {
		return this.checkDependency(query, this.modules);
	}

	getModules(query) {
		return this.modules.filter(current => this.checkDependency(query, [current]));
	}
	// Modules loader section
	load(modulesArray) {
		modulesArray.forEach(current => {
			this.stack.push(require(current));
		});
		this.register();
	}

	register() {
		const current = this.stack.shift();
		if (current._dependencyQuery.length > 0){
			current._dependencyQuery = current._dependencyQuery.filter(query => {
				let dependency = this.checkDependency(query, this.modules) || this.checkDependency(query, this.stack);
				return this.loadDependency(current, dependency);
			});
			this.stack[this.stack.length] = current;
		} else {
			current.ready();
			this.modules.push(current);
		}
		this.stack.length > 0 ? this.register() : null;
	}

	checkDependency(query, source) {
		const found = source.find(function(element) {
			const compareResult = [];
			for (let key in query) {
				const elementProperty = element[key];
				const queryProperty = query[key];
				elementProperty === queryProperty ? compareResult.push(true) : null; 
			}
			return compareResult.length === Object.keys(query).length ? true : false;
		});
		return found;
	}

	checkCircular(module, dependency) {
		const circular = dependency._dependencyQuery.filter(current => {
			return current.name === module.name ? true : false;
		});
		return circular.length > 0 ? 'Circular' : undefined;
	}

	loadDependency(moduleObject, dependency) {
		if (!dependency) {
			return true;
		} else if (dependency.hasOwnProperty('id')) {
			moduleObject.addDependency(dependency);
			return false;
		}
	}
}


module.exports = ModulesInitializer;
