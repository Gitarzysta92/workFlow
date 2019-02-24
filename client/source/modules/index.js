import { authorization } from './authorization';
import { cooboard } from './cooboard';


const importedModules = [authorization, cooboard]

const moduleMoodel = {
	name: 'isString',
	component: 'isReactComponent',
	mountPath: 'isStringWithDesiredPattern',
	reducer: 'isFunction'
	api: 'isArrayWithElementsDesiredPattern'
}


class Modules {
	constructor() {
		this._reducers = [];
	}

	set lib(importedModules) {

	}

	get reducers() {
		return this._reducers;
	}

	_validateModule() {

	}
 }


const modules = new Modules();
modules.lib = importedModules;



class ModuleWrapper {
	constructor() {
		
	}
}


export { reducers }





/*
const reducer = (state = [], action) => {
	switch(action.type) {
		case ADD_COMMENT:
			return [{
				id: action.id,
				text: action.text,
				votes: 0
			}
		, ...state]
		defaut:
			return state;
	}
} 
*/
