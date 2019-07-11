import Module from '../module';
import Board from './board';
//import Reducer from './flux/reducer';
import { MOUNTPOINT } from 'Constants';


const module = new Module('CooBoard',{
	component: Board,
	mountPoint: MOUNTPOINT.main,
	reducer: '',
})

export default module;

