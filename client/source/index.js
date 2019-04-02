// import external dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link  } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './helpers/store';

// import application main module
import Modules from './modules';

import App from './app';

// import major css styles
import 'bootstrap/dist/css/bootstrap.css';
import Style from './assets/scss/main.scss';


const AppContext = React.createContext({});
const Authorizer = Modules.getModule('authorization', 'component');


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<AppContext.Provider value={'state'}>
			<Link to="/login">Public Page</Link>
				<Authorizer/>
			</AppContext.Provider>
		</Router>
	</Provider>,
	document.getElementById('app')
);


