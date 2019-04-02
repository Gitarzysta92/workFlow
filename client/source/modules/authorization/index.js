import Module from '../module';
import Authorizer from './auth';
import * as Reducers from './redux/_reducers';


// Object.entries(Reducers).map(reducer => Object.fromEntries([reducer]))
// Object.fromEntries(Object.entries(Reducers))
const module = new Module({
	name: 'authorization',
	component: Authorizer,
	mountPath: '/authorization',
	reducer: Object.entries(Reducers).map(reducer => Object.fromEntries([reducer])),
	api: ''
})

export default module;

