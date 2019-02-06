import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { hot } from 'react-hot-loader';

import { SecretRoute } from '../authorization/auth';
import { CooBoard } from '../cooboard/board';


const Home = () => (
	<div>
		<h2> Home </h2>
	</div>
);

const Airport = () => (
	<div>
		 <ul>
			<li>Jomo Kenyatta</li>
			<li>Tambo</li>
			<li>Murtala Mohammed</li>
		</ul>
	</div>
);

const City = () => (
	<div>
		<ul>
			<li>San Francisco</li>
			<li>Istanbul</li>
			<li>Tokyo</li>
		</ul>
	</div>
);


class App extends Component {
	constructor() {
		this.state = {
			user: {}
		}
	}

	updateUser() {
		setState
	}

	render() {
		return (
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/airports">Airports</Link></li>
					<li><Link to="/cities">Cities</Link></li>
				</ul>

		<SecretRoute user={user} path="/" exact component={CooBoard}/>
		<Route path="/airports" component={Airport}/>
		<Route path="/cities" component={City}/>
			</div>
		);
	}
}




export default hot(module)(App);