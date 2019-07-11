import { userTypes } from '../user-types/types';

// no permissions inheritance
const notRegistered = userTypes.notRegistered.name;

// inherit permissions from notRegistered
const user = userTypes.user.name;

export const PATHS = {
	root: {
		uri: '/',
		permission: user
	},
	app: {
		uri: '/application',
		permission: user
	},
	//
	// Dashboard module paths
	Dashboard: {
		uri: '/application/dashboard',
		permission: user
	},
	//
	// Cooperative Tasks Board
	CooBoard: {
		uri: '/application/cooboard',
		permission: user
	},
	//
	// Authorization paths
	UserAuthorization: {
		uri: '/login',
		permission: notRegistered
	},
	UserRegistration: {
		uri: '/Register',
		permission: notRegistered
	},
	UserLogout: {
		uri: '/logout',
		permission: user
	}
}

