import React from 'react';
import style from './style.scss';

import RegisterForm from './components/register-form';
import RegisterPage from './components/login-page';


class Register extends React.Component {
	constructor(props) {
		super(props);
	}

	registerUser = ({ username, password }) => {
		const { dispatch } = this.props;

		if (username && password) {
			dispatch(userActions.login(username, password));
		}
	}

	render() {
		return (
			<RegisterPage submitHandler={registerUser}/>
		)
	}
}

export default Register;