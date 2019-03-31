import Module from '../module';
import DashBoard from './dashboard';
import Reducer from './flux/reducer';


const module = new Module({
	name: 'dashboard',
	component: DashBoard,
	mountPath: '/dashboard',
	reducer: Reducer,
	api: ''
})

export default module;

