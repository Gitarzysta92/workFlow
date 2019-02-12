//import React, { Component } from 'react';
//import { hot } from 'react-hot-loader';




class Module {
	constructor({name, component, mountPath, api}) {
		this.name = name;
		this.component = component;
		this.mountPath = mountPath;
		this.api = api;
	}
}



export default Module;