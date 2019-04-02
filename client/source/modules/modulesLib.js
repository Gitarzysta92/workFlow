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
	getModule(moduleName, property) {
		const module = this.lib.find(current => moduleName === current.name);
		if (!module) {
			throw Error('Invaild module name')
			return;
		}
		return property ? module[property] : module;
	}
}


