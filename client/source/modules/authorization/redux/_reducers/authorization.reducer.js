import { actionName } from '../_constants/user.constants';


export function authentication(state = [], action) {
	switch(action.type) {
		case actionName.LOGIN_REQUEST:
			return {
				loggingIn: false,
				user: action.user
			};
		case actionName.LOGIN_SUCCESS:
			return {
				loggingIn: false,
				user: action.user
			};
		case actionName.LOGIN_FAILURE:
			return {
				loggingIn: false,
				user: action.user
			};
		case actionName.LOGOUT:
			return {
				loggingIn: false,
				user: action.user
			};
		default:
			return state;
	}
}
