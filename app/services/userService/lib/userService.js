const db = application.database;
const userCollection = 'users';

module.exports = {
	getUser,
	registerUser,
	authenticateUser
};



async function getUser(username) {
	const database = await db;
	return await database.getSingle(userCollection, {username});
}


// need user object
// example { login: string, password: string }

// TO DO - hash password before database insert
async function registerUser({username, password}) {
	const database = await db;
	return database.insertSingle(userCollection, {username, password});
}


// TO DO - create password and hash compare function
async function authenticateUser({username, password}) {
	const database = await db;
	const stored = await database.getSingle(userCollection, {username});

	if (stored && compare(stored.password, password)) {
		return stored;
	} else {
		throw new Error('Invalid login or password');
	}
}
function compare(a, b) {
	return a === b ? true : false;
}

