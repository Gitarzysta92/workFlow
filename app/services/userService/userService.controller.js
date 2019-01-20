// ------------------
// User Service Controller
// ------------------

// Init module interface
// and set it type
const mod = new Mod(__filename);

//load node modules dependencies
const service = require('./lib/userService.js');
const session = require('./lib/userSession.js');

//load module manager dependencies
mod.expect({name: 'crud.mongo.js'});



/*
function getUser(req, res, next) {
	service.getUser(req.params.name).then(userData => res.send(userData));
}

function registerUser(req, res, next) {
	app.registerUser(req.body).then(added => res.send(added));
}

function authenticateUser(req, res, next) {
	app.authenticateUser(req.body).then(session => res.send(session.getToken()));
}
*/

// Public
mod.publish(async function(mongoCRUD) {
	//const crudApi = await mongoCRUD;
	//sample database request
	//console.log(await crudApi.getSingle({username: 'log'}, 'users'));
});
module.exports = mod;
module.exports.router = 'ptaszek';
