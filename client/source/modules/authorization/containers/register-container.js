import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../redux/_actions';

import LoginPage from '../components/register-page';


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

export {Register};