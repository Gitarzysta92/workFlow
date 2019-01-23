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
		endpoint: '/user',
		controller: service.getUser
	},
	{
		name: 'register-user',
		type: 'post',
		endpoint: '/user',
		controller: service.registerUser
	},
	{
		name: 'register-user',
		type: 'get',
		endpoint: '/user/:id',
		controller: service.authenticateUser
	}
]


console.log(service);

// Public
mod.publish(() => {
	return routes
});
module.exports = mod;

