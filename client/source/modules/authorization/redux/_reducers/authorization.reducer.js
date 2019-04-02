import { actionName } from '../_constants/user.constants';


export function authorization(state = {}, action) {
	switch(action.type) {
		case actionName.LOGIN_REQUEST:
			return {
				loggingIn: true,
				user: action.user
			};
		case actionName.LOGIN_SUCCESS:
			return {
				loggedIn: true,
				user: action.user
			};
		case actionName.LOGIN_FAILURE:
			return {};
		case actionName.LOGOUT:
			return {};
		default:
			return state;
	}
}
