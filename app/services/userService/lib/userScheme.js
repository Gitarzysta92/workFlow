
const userScheme = {
	'id': '',
	'e-mail': '',
	'password': '',
	'name': '',
	'surname': '',
	'birth-date': '',
	'group': [],
	'avatar': 'asdasd',
	'_meta': {
		'type': ''
	}
}


module.exports = function(id, userData) {
	const newUser = {}
	const scheme = Object.keys(userScheme);

	scheme.forEach(current => {
		Object.defineProperty(newUser, current, {
			value: userData[current] || userScheme[current]
		})
	});
	console.log(newUser);
	return newUser;
}