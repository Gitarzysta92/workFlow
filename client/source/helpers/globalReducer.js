import { combineReducers } from 'redux';
import Modules from '../modules';


const reducers = Modules.reducers.reduce((acc, current) => ({...acc, ...current}), {});
const globalReducer = combineReducers(reducers);

export default globalReducer;