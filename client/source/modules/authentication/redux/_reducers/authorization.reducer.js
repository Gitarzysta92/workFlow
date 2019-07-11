import { actionName } from '../_constants/user.constants';

const initState = {
	authenticated: false
}

export function authentication(state = initState, action) {
	switch(action.type) {
		case actionName.LOGIN_REQUEST:
			return {
				loggingIn: true
			};
		case actionName.LOGIN_SUCCESS:
			return {
				authenticated: true,
				token: action.token
			};
		case actionName.LOGIN_FAILURE:
			return {
				authenticated: false
			};
		case actionName.LOGOUT:
			return {
				authenticated: false
			};
		default:
			return state;
	}
}
