import { combineReducers } from 'redux';
import Modules from './modules';

const reducers = Modules.reducers;
const globalReducer = combineReducers({...reducers});

export default globalReducer;