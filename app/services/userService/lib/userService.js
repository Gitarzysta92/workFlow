//console.log(mod);

/*const db = require('../../core/modules').db_methods;
const session = require('./userSession').createSession;
const userCollection = 'users';

module.exports = {
	getUser,
	registerUser,
	authenticateUser
};

async function getUser(username) {
	const result = await db.getSingle({username}, userCollection);
	return result;
}

// need user object
// example { login: string, password: string }

// TO DO - hash password before database insert
async function registerUser(userParam) {
	const result = db.insertSingle(userParam, userCollection);
	return result;
}


// TO DO - create password and hash compare function
async function authenticateUser({username, password}) {
	const request = await db.getSingle({username}, userCollection);

	if (request.username && compare(request.password, password)) {
		return session(request.id)
	} else {
		console.log('Invalid login or password')
	}
}

function compare(a, b) {
	return a === b ? true : false;
}
*/

module.exports = 'service';
