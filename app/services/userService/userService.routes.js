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
		name: 'get-user',
		type: 'get',
		access: 'administrator',
		endpoint: /^\/user$/,
		controller: service.getUser
	},
	{
		name: 'register-user',
		type: 'post',
		access: 'moderator',
		endpoint: /^\/user$/,
		controller: service.registerUser
	},
	{
		name: 'authenticate-user',
		type: 'post',
		access: 'public',
		endpoint: '/user/auth',
		controller: service.authenticateUser
	},
	{
		name: 'user-session-middleware',
		type: 'use',
		hook: 'setting-request',
		endpoint: '*',
		controller: service.bindSession	
	}
]

// Public
mod.publish(() => routes);
module.exports = mod;

