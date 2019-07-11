import Module from '../module';
import { combineReducers } from 'redux';

import DashBoard from './dashboard';
import Reducer from './redux/reducers';
import { MOUNTPOINT } from 'Constants';

const module = new Module('dashboard',{
	component: DashBoard,
	mountPoint: MOUNTPOINT.main,
	reducer: Reducer,
})

export default module;

