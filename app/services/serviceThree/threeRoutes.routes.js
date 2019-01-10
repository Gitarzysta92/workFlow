// ------------------
// Route
// ------------------

// Init module interface
// and set it type
const mod = new Mod(__filename);

// Private
function walen(req, res, next) {
	//res.send('walen');
}

const route = {
	name: 'middleware',
	type: 'use',
	endpoint: '/asd',
	controller: walen
}; 

// Public
mod.publish(() => route);

module.exports = mod;
	