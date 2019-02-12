import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { hot } from 'react-hot-loader';

import Layout from './components/layout';



class DashBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};
	}

	updateUser() {
		//setState
	}

	render() {
		return (
			'asd'
		);
	}
}


const module = {
	name: 'DashBoard',
	component: DashBoard,
	mountPath: '/dashboard',
	api: [
		{
			id: 'addActivity',
			mountPath: '/'
		},
		{
			id: 'addActivity',
			mountPath: '/'
		}
	]
}

export default module;