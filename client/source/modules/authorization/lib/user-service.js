import { apiCaller } from 'Utils';
import { userAPI } from 'Constants';

export const userService = {
	login,
	logout,
	register
}

function login(username, password) {
	const { endpoint, type } = userAPI.AUTHORIZATION;
	const requestBody = { username, password }; 

	return apiCaller(endpoint, type, requestBody)
		.then(user => {
			return user;
		});
}




function logout() {

}


function register(user) {
	const url = '';
	const requestOptions = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(user)
	};

	return fetch(url, requestOptions)
		.then(handleResponse)
		.then(user => {
			return user;
		});
}


