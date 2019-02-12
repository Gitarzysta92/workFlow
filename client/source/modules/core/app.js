import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import { hot } from 'react-hot-loader';


import Main from './main';
import { Authorizer, AuthRoute } from '../authorization/auth';



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};
		this.appPath = '/app';
		this.entryPath = '/app/dashboard';
	}

	updateUser() {
		//setState
	}

	render() {
		return (
			<div>
				<Route exact path='/' render={() => ( <Redirect to={this.entryPath}/> )}/>
				<AuthRoute user={this.state.user} path={this.appPath} component={Main}/>
				<Authorizer/>
			</div>
		);
	}
}




export default hot(module)(App);