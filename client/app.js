import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
//import io from 'socket.io-client';
import styles from './css/App.css';


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

const data = {
	username: 'roota',
	password: 'root'
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
		this.register(data, requestParams).then().catch(err => console.log(err));

	}


	async function register(data, requestParams) {
		const url = 'http://localhost:3000/user';
		const params = requestParams;

		params.body = JSON.stringify(data);

		fetch(this.register, params).then(data => console.log('response', data.body.json()));
	}



	async function authorize(data, requestParams) {
		const url = 'http://localhost:3000/user/auth';
		const params = requestParams;

		params.body = JSON.stringify(data);

		fetch(this.register, params).then(data => console.log('response', data.body.json()));
			
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