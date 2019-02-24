// import external dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import application main module
import App from './app';

// import global reducer
import reducer from './globalReducer';

// import major css styles
import 'bootstrap/dist/css/bootstrap.css';
import Style from './assets/scss/main.scss';


const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('app')
);


