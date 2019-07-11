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
	service.getUser(req.params.username).then(userData => {
		res.send(userData);
	});
}


function registerUser(req, res, next) {
	service.registerUser(req.body).then(result => res.send(result))
		.catch(err => next(err));
}


function authenticateUser(req, res, next) {
	service.authenticateUser(req.body).then(user => {
		const session = sessionsHandler.getSession({name: user.username});
		if (session) {
			res.send({token: session.token});
			return;
		}
		// TO DO: Setup admin to user session handler
		const userSession = sessionsHandler.createSession(user);
		console.log(userSession);
		res.send({token: userSession.token});
	}).catch(err => next(err));
}


function getAuthenticatedUserData(req, res, next) {
	const session = req.userSession || false;
	if (!session) {
		const err = new Error('User not authenticated');
		next(err)
	}
	service.getMetaData(session.username).then(result => res.send(result))
		.catch(err => next(err));
}


function saveToUserSession(req, res, next) {

}


function getFromUserSession(req, res, next) {

}


function endUserSession(req, res, next) {

}


// Middleware
// User sessions
// check is users session had be created
// if it is, bind session to request
function bindSession(req, res, next) {
	const userToken = req.headers.hasOwnProperty('token');
	if (!userToken) {
		// throw error -> your token is invaild
		next();
		return;	
	}
	const token = req.headers['token'];
	const userSession = sessionsHandler.getSessionByToken(token);
	console.log(req.headers['token'], sessionsHandler);
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
	bindSession,
	getAuthenticatedUserData
};
