import { actionName } from '../_constants/user.constants';


export function authorization(state = {}, action) {
	switch(action.type) {
		case actionName.LOGIN_REQUEST:
			return {
				loggingIn: true,
				token: action.token
			};
		case actionName.LOGIN_SUCCESS:
			return {
				loggedIn: true,
				token: action.token
			};
		case actionName.LOGIN_FAILURE:
			return {};
		case actionName.LOGOUT:
			return {
				loggedOut: true
			};
		default:
			return state;
	}
}
