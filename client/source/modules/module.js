import { Modules } from './modulesLib';

class Module {
	constructor(name, {component, mountPoint, reducer, api}) {
		this.name = name;
		this.component = component;
		this.mountPoint = mountPoint;
		this.reducer = reducer;
		this.api = api;
		Modules.addModule = this;
	}
 }

export default Module;