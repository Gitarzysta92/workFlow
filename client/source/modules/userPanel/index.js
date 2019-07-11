import Module from '../module';
import userWidget from './userWidget';
import userPanel from './userWidget';
import { MOUNTPOINT } from 'Constants';
//import * as Reducers from './redux/_reducers';


const widget = new Module('User Panel widget', {
	component: userWidget,
	mountPoint: MOUNTPOINT.sidebarLeft,
	reducer: false,
})

const module = new Module('User Panel', {
	component: userPanel,
	mountPoint: MOUNTPOINT.main,
	reducer: false,
})

export { widget, module };

