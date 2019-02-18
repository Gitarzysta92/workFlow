import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Main from './containers/main/main';
import App from './modules/core/app';
import Style from './assets/scss/main.scss';



ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('app')
);


