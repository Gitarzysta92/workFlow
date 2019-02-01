// ------------------
// User Service Controller
// ------------------

// Init module interface
// and set it type
const mod = new Mod(__filename);

//load node modules dependencies
const service = require('./lib/userService.js');
const SessionsHandler = require('./lib/userSessions.js');
const sessionsHandler = new SessionsHandler(); 

//
// User services
function getUser(req, res, next) {

	service.getUser(req.params.name).then(userData => {
		res.send(userData)
	});
}

function registerUser(req, res, next) {
	service.registerUser(req.body).then(result => res.send(result));
}

function authenticateUser(req, res, next) {
	service.authenticateUser(req.body).then(user => {

		if (!user) {
			throw new Error('User not mached');
			return;
		}

		const sessionExists = sessionsHandler.getSession({name: user.username});

		if (sessionExists) {
			res.send(sessionExists.token);
			return;
		}
		// TO DO: Setup admin to user session handler
		const userSession = sessionsHandler.createSession(user);
		res.send(userSession.token);
	}).catch(err => next(err));
}


//
// User sessions
// check is users sesssion had be created
// if is, bind session to request
function bindSession(req, res, next) {
	const userToken = req.headers.hasOwnProperty('session-token');
	if (!userToken) {
		// throw error -> your token is invaild
		next();
		return;	
	}

	const userSession = sessionsHandler.getSession({token: req.headers['session-token']});
	if (userSession) {
		req.userSession = userSession;
	}
	next();
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
	authenticateUser,
	bindSession
};
