import { actionName } from '../_constants/user.constants';


export function registration(state = [], action) {
	switch(action.type) {
		case actionName.REGISTER_REQUEST:
			return { registering: true };
		case actionName.REGISTER_SUCCESS:
			return {};
		case actionName.REGISTER_FAILURE:
			return {};
		default:
			return state;
	}
}

