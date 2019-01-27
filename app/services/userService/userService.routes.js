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
		endpoint: '/user',
		controller: service.getUser
	},
	{
		name: 'register-user',
		type: 'post',
		access: 'moderator',
		endpoint: '/user',
		controller: service.registerUser
	},
	{
		name: 'register-user',
		type: 'get',
		access: 'subscriber',
		endpoint: '/user/:id',
		controller: service.authenticateUser
	}
]

// Public
mod.publish(() => {
	return routes
});
module.exports = mod;

