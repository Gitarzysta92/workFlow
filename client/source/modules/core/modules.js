//import React, { Component } from 'react';
//import { hot } from 'react-hot-loader';


import ModuleContainer from './lib/mod-container';

import CooBoard from '../cooboard/board';
import DashBoard from '../dashboard/index';



class Modules {
	constructor() {
		this.modules = [];
	}
	set add(modObj) {
		const wrapModule = new ModuleContainer(modObj); 
		this.modules.push(modObj);
	}

	get components() {
		return this.modules.map(module => module.component);
	}
}

const modules = new Modules();

modules.add = CooBoard;
modules.add = DashBoard;


export default modules;