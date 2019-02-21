// import external dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import main application module
import App from './modules/core/app';

// import app actions store
import Store from './modules/flux/store-provider';

// import major css styles
import 'bootstrap/dist/css/bootstrap.css';
import Style from './assets/scss/main.scss';



ReactDOM.render(
	<Store>
		<Router>
			<App />
		</Router>
	</Store>,
	document.getElementById('app')
);


