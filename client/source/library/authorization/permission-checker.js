import { userTypes } from 'Constants';

function access(context) {
	return function(route) {
		const {permissions, userType: user } = context;
		const currentUser = user;
		const UserTypes = [...userTypes[currentUser].inherits, currentUser];
		const permModel = UserTypes.reduce((acc, current) => {		
			return acc = [...acc, ...permissions.model[current]]
		}, []);
		return permModel.find(current => current === route) ? true : false;
	}
}

export default access;
