import React from 'react';
import { Redirect } from 'react-router-dom';
import { JoinToHoc } from 'Utils';

import { userActions } from '../redux/_actions';
import { PATHS } from 'InternalApi';

import { AlertBox } from './alert-container';
import RegisterPage from '../components/register-page';


class Register extends React.Component {
	constructor(props) {
		super(props);
	}

	registerUser = (userData) => {
		const { dispatch } = this.props;

		if (userData) {
			dispatch(userActions.register(userData));
		}
	}

	alertBox() {
		return <AlertBox />
	}

	render() {
		return (
			<RegisterPage submitHandler={this.registerUser} alert={this.alertBox()} />
		)
	}
}


const mapStateToProps = (state) => {
	const { registering } = state.registration;
	return { registering };
};

const connectedRegister = JoinToHoc(Register, { mapStateToProps });
export { connectedRegister as Register }
