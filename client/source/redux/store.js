import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware  from 'redux-thunk';
import { createLogger } from 'redux-logger';

import globalReducer from './globalReducer';


const loggerMiddleware = createLogger();


function prepareStore(initialState) {

	const state = initialState || {};
	const store = createStore(
		globalReducer,
		state,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)	
	)
	return store;
}

export default prepareStore;