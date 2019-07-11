// ------------------
// User service routes
// ------------------

// Init module interface
// and set it type
const mod = new Mod(__filename);


//load node modules dependencies
const service = require('./userService.controller.js').methods;


// Private
const routes = [
	{	
		// Not implemented
		name: 'get-users',
		type: 'get',
		access: 'administrator',
		hook: 'execution',
		endpoint: '/user',
		controller: service.getAuthenticatedUserData
	},
	{
		name: 'get-user',
		type: 'get',
		access: 'administrator',
		hook: 'execution',
		endpoint: '/user/:username',
		controller: service.getUser
	},
	{
		name: 'register-user',
		type: 'post',
		access: 'public',
		hook: 'execution',
		endpoint: '/user/register',
		controller: service.registerUser
	},
	{
		name: 'authenticate-user',
		type: 'post',
		access: 'public',
		hook: 'execution',
		endpoint: '/user/auth',
		controller: service.authenticateUser
	},
	{
		name: 'user-session-middleware',
		type: 'use',
		endpoint: '*',
		hook: 'setting-request',
		controller: service.bindSession	
	}
]

// Public
mod.publish(() => routes);
module.exports = mod;
