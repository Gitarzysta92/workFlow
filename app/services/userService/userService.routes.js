// ------------------
// User service routes
// ------------------

// Init module interface
// and set it type
const mod = new Mod(__filename);

//load node modules dependencies
const controller = require('./userService.controller.js').router;
console.log(controller);

// Private
const routes = [
	{
		name: 'get-user',
		type: 'get',
		endpoint: '/user',
		controller: 'testFunc'
	},
	{
		name: 'register-user',
		type: 'post',
		endpoint: '/user',
		controller: 'testFunc'
	}
]

// Public
mod.publish(() => routes);
module.exports = mod;

