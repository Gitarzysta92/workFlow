export const Modules = {
	lib: [],
	set addModule(mod) {
		this.lib.push(mod);
	},
	get all() {
		return this.lib;
	},
	get reducers() {
		return this.lib.reduce((acc, current) => 
			[...acc, ...(Array.isArray(current.reducer) ? [...current.reducer] : [current.reducer])]
			, []);
	},
	getModule(moduleName, propQuery) {
		const module = this.lib.find(current => moduleName === current.name);
		if (!module) {
			throw Error('Invaild module name ' + moduleName)
			return;
		}
		return propQuery ? module[propQuery] : module;
	},

	getModules(...propQuery) {
		return this.lib.map(mod => {
			const result = propQuery.reduce(
				(acc, prop) => Object.assign(acc, {
					[prop]: mod[prop]	
				}) 
			,{})
			return {name: mod.name, ...result}
		})
	}
}


