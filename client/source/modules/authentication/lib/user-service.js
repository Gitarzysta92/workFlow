import { apiCaller } from 'InternalApi';


export const userService = {
	login,
	logout,
	register
}

function login(username, password) {
	const requestBody = { username, password };

	return apiCaller('user-authentication', requestBody)
		.then(user => user);
}

function logout() {
	// send saved session to server
}

function register(user) {
	const requestBody = user;

	return apiCaller('user-registration', requestBody)
		.then(user => user);
}


