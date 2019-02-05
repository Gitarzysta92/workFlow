import React, { Component } from 'react';
import style from './main.scss';
import Header from '../header/header';
import Jumbotron from '../jumbotron/jumbotron';
import Form from '../login-form/form';
import { hot } from 'react-hot-loader';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<main className={'main-container'}>
				<Form/>
			</main>
		)
	}
}


export default hot(module)(Main);