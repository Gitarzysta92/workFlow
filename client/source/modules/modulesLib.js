export const Modules = {
	lib: [],
	set addModule(mod) {
		this.lib.push(mod);
	},
	get all() {
		return this.lib;
	},
	get reducers() {
		return this.lib.map(current => current.reducer);
	},
	getModule(moduleName, property) {
		const module = this.lib.find(current => moduleName === current.name);
		if (!module) {
			throw Err('Invaild module name')
			return;
		}
		return property ? module[property] : module;
	}
}


