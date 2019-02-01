const interfaceDirectory = require.resolve('./modulesInterface.js');
const setDependency = require('./modulesInterface.js').dependency;
const Module = require('module');


// TO DO
// Refactor this inject 
// pass module interface in wrapper arguments
//

(function(moduleWrapper) {
	Module.wrap = function(script) {
		const moduleInterface = interfaceDirectory.replace(/\\/g, '/');
		script = 'const Mod = require(\''+ moduleInterface +'\').mod;'
		+ 'const application = require(\''+ moduleInterface +'\').app;'
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


	getPublished(query) {			
		return this.checkDependency(query, this.modules).published;
	}

	getAllPublished(query) {
		const result = this.modules.filter(current => this.checkDependency(query, [current]));
		return this.flatArray(result.map(current => current.published));
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

		if (!current.hasOwnProperty('_dependencyQuery')) return false;
		if (current._dependencyQuery.length > 0){
			current._dependencyQuery = current._dependencyQuery.filter(query => {
				// check dependency is registered in this.modules
				// !for circural dependencies should check in this.stack
				let dependency = this.checkDependency(query, this.modules);
				// when it is already registered remove dependencyQuery 
				// to remove: loadDependency = false 
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

	flatArray(array, aggregator = []) {
		const aggr = aggregator;
		const toFlat = array;

		toFlat.forEach(current => {
			if (Array.isArray(current)) {
				aggr.concat(this.flatArray(current, aggr));
			} else {
				aggr.push(current);
			}
		}); 
		return aggr; 
	}
}


module.exports = ModulesInitializer;
module.exports.defaultDependency = function(dependency) {
	setDependency(dependency);
}
