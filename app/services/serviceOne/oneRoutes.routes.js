// ------------------
// Route
// ------------------

// Init module interface
// and set it type
const mod = new Mod(__filename);

// Private
function testFunc(req, res, next) {
	res.send('home');
}

const route = {
	name: 'home',
	type: 'get',
	access: 'administrator',
	hook: 'execution',
	endpoint: '/',
	controller: testFunc
}; 

// Public
mod.publish(() => route);

module.exports = mod;