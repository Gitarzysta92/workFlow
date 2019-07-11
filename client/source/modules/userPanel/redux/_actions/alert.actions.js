import { actionName } from '../_constants/action.constants';



export const alertActions = {
	failure,
	success
}

function success(message) {
	return {
		type: actionName.SUCCESS_ALERT,
		message: message
	}
}

function failure(message) {
	return {
		type: actionName.FAILURE_ALERT,
		message: message
	}
}



