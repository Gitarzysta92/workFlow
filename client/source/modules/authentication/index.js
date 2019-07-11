import Module from '../module';
import Authentication from './auth';
import * as Reducers from './redux/_reducers';
import { MOUNTPOINT } from 'Constants';



const module = new Module('Authentication', {
	component: Authentication,
	mountPoint: MOUNTPOINT.root,
	reducer: Object.entries(Reducers).map(redu => ({[redu[0]]: redu[1]}))
})

export default module;

