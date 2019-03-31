export const userService = {
	login,
	logout,
	register
}

function login(username, password) {
	const url = '';
	const requestOptions = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({ username, password })
	};

	return fetch(url, requestOptions)
		.then(handleResponse)
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


function handleResponse(response) {
	return response.text().then(text => {
		const data = text && JSON.parse(text);

		if (!response.ok) {
			if (response.status === 401) {
				logout();
				location.reload(true);
			}
			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}
		return data;
	});
}

