// ------------------
// Route
// ------------------

// Init module interface
// and set it type
const mod = new Mod(__filename);

// Private

const homarek = 'To jest homar';

function homar(req, res, next) {
	res.send(homarek);
}

const route = {
	name: 'Route',
	type: 'post',
	endpoint: '/route',
	controller: homar
}; 

// Public
mod.publish(() => route);

module.exports = mod;
	