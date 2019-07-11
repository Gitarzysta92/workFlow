import Module from '../module';
import Chat from './chat';
import { MOUNTPOINT } from 'Constants';
//import * as AuthRoute from './lib/auth-route'
//import * as Reducers from './redux/_reducers';


const module = new Module('Chat', {
	component: Chat,
	mountPoint: MOUNTPOINT.sidebarRight,
	reducer: false,
})

export default module;

