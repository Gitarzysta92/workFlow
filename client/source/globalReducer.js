import { combineReducers } from 'redux';
import { reducers } from './modules';

const globalReducer = combineReducers({...reducers});

export default globalReducer;