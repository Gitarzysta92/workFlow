// ------------------
// Route
// ------------------

// Init module interface
// and set it type
const mod = new Mod(__filename);

// Private
function testFunc(req, res, next) {
	res.render('home');
}

const route = {
	name: 'home',
	type: 'get',
	endpoint: '/home',
	authFlag: '3',
	controller: 'testFunc'
}; 

// Public
mod.publish(() => route);

module.exports = mod;