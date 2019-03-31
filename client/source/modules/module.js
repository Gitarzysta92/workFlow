import { Modules } from './modulesLib';

class Module {
	constructor({name, component, mountPath, reducer, api}) {
		this.name = name;
		this.component = component;
		this.mountPath = mountPath;
		this.reducer = reducer;
		this.api = api;
		Modules.addModule = this;
	}
 }

export default Module;