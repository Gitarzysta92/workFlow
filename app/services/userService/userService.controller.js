// ------------------
// User Service Controller
// ------------------

// Init module interface
// and set it type
const mod = new Mod(__filename);

//load node modules dependencies
const service = require('./lib/userService.js');
const session = require('./lib/userSession.js');



function getUser(req, res, next) {
	service.getUser(req.params.name).then(userData => res.send(userData));
}

function registerUser(req, res, next) {
	service.registerUser(req.body).then(result => res.send(result));
}

function authenticateUser(req, res, next) {
	service.authenticateUser(req.body).then(session => res.send(session.getToken()));
}


// Public
mod.publish(async function(mongoCRUD) {
	//const crudApi = await mongoCRUD;
	//sample database request
	//console.log(await crudApi.getSingle({username: 'log'}, 'users'));
});
module.exports = mod;
module.exports.methods = {
	getUser,
	registerUser,
	authenticateUser
};
