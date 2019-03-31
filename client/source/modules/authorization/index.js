import Module from '../module';
import { Authorizer, AuthRoute } from './auth';
import Reducer from './flux/reducer';


const module = new Module({
	name: 'authorization',
	component: Authorizer,
	mountPath: '/cooboard',
	reducer: Reducer,
	api: AuthRoute
})

export default module;

