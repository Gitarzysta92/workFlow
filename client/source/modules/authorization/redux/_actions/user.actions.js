import { userService } from '../../lib/user-service';
import { actionName } from '../_constants/user.constants';


export const userActions = {
	login,
	logout,
	register
} 

function login(username, password) {
	return dispatch => {
		dispatch(request({ username }));
	}

	userService.login(username, password)
		.then(
			user => {
				dispatch(success(user));
			}
			error => {
				dispatch(failure(error.toString()));
			}
		)


	function request(user) { return { type: actionName.LOGIN_REQUEST, user } };
	function success(user) { return { type: actionName.LOGIN_SUCCESS, user } };
	function failure(user) { return { type: actionName.LOGIN_FAILURE, error } };
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
					dispatch(success());
					//dispatch(alertActions.success('Registration successful'));
				},
				error => {
					dispatch(failure(error.toString()));
				}
			);
	}

	function request(user) { return { type: actionName.REGISTER_REQUEST, user } };
	function success(user) { return { type: actionName.REGISTER_SUCCESS, user } };
	function failure(error) { return { type: actionName.REGISTER_FAILURE, error } };
}