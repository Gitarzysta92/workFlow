import Module from '../module';
import App from './app';
import Reducer from './flux/reducer';


const module = new Module({
	name: 'Core',
	component: App,
	mountPath: '/core',
	reducer: Reducer,
	api: ''
})

export default module;

