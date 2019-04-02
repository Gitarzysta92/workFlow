import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";



import Main from './main';




class Core extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: this.props.user
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
			</div>
		);
	}
}




export default Core;