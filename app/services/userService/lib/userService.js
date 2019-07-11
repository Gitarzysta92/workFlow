const db = application.database;
const filesManager = application.filesManager;
const userCollection = 'users';
const userScheme = require('./userScheme');
const uuid = require('uuid/v4');

module.exports = {
	getUser,
	getMetaData,
	registerUser,
	authenticateUser
};



async function getUser(username) {
	const database = await db;
	return await database.getSingle(userCollection, {username});
}

async function getMetaData(username) {
	const database = await db;
	return await database.getSingle(userCollection, {username});
}


// need user object
// example { login: string, password: string }

// TO DO - hash password before database insert
async function registerUser(userData) {
	const database = await db;
	const { email } = userData;
	const isUserAlreadyExists = await database.getSingle(userCollection, {email});

	if (isUserAlreadyExists) {
		throw new Error('User with given email adress already exists');
	}
	const userID = uuid();
	console.log(filesManager)
	const user = userScheme(userID, userData);
	return await database.insertSingle(userCollection, user);
}


// TO DO - create password and hash compare function
async function authenticateUser({username, password}) {
	const database = await db;
	const stored = await database.getSingle(userCollection, {email: username});

	console.log(username, stored);
	if (stored && compare(stored.password, password)) {
		return stored;
	} else {
		throw new Error('Invalid login or password');
	}
}
function compare(a, b) {
	return a === b ? true : false;
}

