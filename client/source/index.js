// import external dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './helpers/store';

// import application main module
import App from './app';

// import major css styles
import 'bootstrap/dist/css/bootstrap.css';
import Style from './assets/scss/main.scss';


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App/>
		</Router>
	</Provider>,
	document.getElementById('app')
);


