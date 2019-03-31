import Module from '../module';
import Board from './board';
import Reducer from './flux/reducer';


const module = new Module({
	name: 'cooboard',
	component: Board,
	mountPath: '/cooboard',
	reducer: Reducer,
	api: ''
})

export default module;

