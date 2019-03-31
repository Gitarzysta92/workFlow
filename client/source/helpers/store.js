import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware  from 'redux-thunk';
import { createLogger } from 'redux-logger';
import globalReducer from './globalReducer'


const loggerMiddleware = createLogger();

export const store = createStore(
	globalReducer,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
)