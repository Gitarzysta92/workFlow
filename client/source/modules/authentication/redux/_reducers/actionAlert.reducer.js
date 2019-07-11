import { actionName } from '../_constants/action.constants';


export function actionAlert(state = {}, action) {
	switch(action.type) {
		case actionName.SUCCESS_ALERT:
			return {
				type: 'success',
				message: action.message
			}
		case actionName.FAILURE_ALERT:
			return {
				type: 'failure',
				message: action.message
			}
		default:
			return state;
	}
}
