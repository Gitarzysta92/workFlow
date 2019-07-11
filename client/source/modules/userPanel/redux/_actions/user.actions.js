import { userService } from '../../lib/user-service';
import { alertActions } from './alert.actions';
import { actionName } from '../_constants/user.constants';

export const userActions = {
	login,
	logout,
	register
} 

function login(username, password) {
	return dispatch => {
		dispatch(request({ username }));

		userService.login(username, password)
			.then(
				userData => {		
					dispatch(success(userData));
					dispatch(alertActions.success('Logging in successful'));
				}	
			).catch(
				error => {
					dispatch(failure(error.toString()));
					dispatch(alertActions.failure(error.toString()));
			})


		function request(token) { return { type: actionName.LOGIN_REQUEST, token } };
		function success(token) { return { type: actionName.LOGIN_SUCCESS, token } };
		function failure(error) { return { type: actionName.LOGIN_FAILURE, error } };
	}

}



function logout() {
	userService.logout();
	return { type: actionName.LOGOUT }
}



function register(user) {
	return dispatch => {
		dispatch(request(user));

		userService.register(user)
			.then(
				user => {
					dispatch(success(user));
					dispatch(alertActions.success('Registration successful'));
				},
				error => {
					dispatch(failure(error.toString()));
					dispatch(alertActions.failure(error.toString()));
				}
			);
	}

	function request(user) { return { type: actionName.REGISTER_REQUEST, user } };
	function success(user) { return { type: actionName.REGISTER_SUCCESS, user } };
	function failure(error) { return { type: actionName.REGISTER_FAILURE, error } };
}