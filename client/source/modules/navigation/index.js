import Module from '../module';
import Menu from './navigation';
import { MOUNTPOINT } from 'Constants';
//import * as AuthRoute from './lib/auth-route'
//import * as Reducers from './redux/_reducers';


const module = new Module('Main menu', {
	component: Menu,
	mountPoint: MOUNTPOINT.sidebarLeft,
	reducer: false,
})

export default module;

