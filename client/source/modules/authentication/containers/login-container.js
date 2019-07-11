import React from 'react';
import { Redirect } from 'react-router-dom';
import { JoinToHoc } from 'Utils';
import { userActions } from '../redux/_actions';
import { PATHS } from 'Constants';

import LoginPage from '../components/login-page';
import { AlertBox } from './alert-container';


class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submitStatus: false,
		}
	}

	authorize = ({ username, password }) => {
		const { dispatch } = this.props;
		if (username && password) {
			dispatch(userActions.login(username, password));
		}
	}

	shouldComponentUpdate(nextProps) {
		return !(nextProps.authenticated === this.props.authenticated)
	}

	alertBox() {
		return <AlertBox />
	}

	render() {
		const previousPage = PATHS.root.uri;
		return this.props.authenticated && previousPage !== PATHS.UserAuthorization ? 
			<Redirect to={previousPage}/> :
			<LoginPage submitHandler={this.authorize} alert={this.alertBox()}/>
	}
}


const mapStateToProps = (state) => {
	const { authenticated } = state.authentication;
	return { authenticated };
};

const connectedLogin = JoinToHoc(Login, { mapStateToProps });
export { connectedLogin as Login }