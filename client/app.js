import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
//import io from 'socket.io-client';
import styles from './css/App.css';





const data = {
	username: 'roota',
	password: 'root'
}
const requestParams = {
	method: 'POST',
	cache: 'no-cache',
	//mode: "no-cors",
	headers: {
		'Accept': 'application/json',
		'Content-Type': "application/json",
		"appkey" : "rootkey"
	},
	body: JSON.stringify(data)
}


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			messages: [],
			text: '',
			name: ''
		}
		this.url='http://localhost:3000/user/auth'

		fetch(this.url, requestParams).then(data => console.log('response', data.body.json()));
	}

	componentDidMount() {

	}

	render() {
		return (
			<div className={styles.App}>
				
			</div>
		);
	}
};



export default hot(module)(App);