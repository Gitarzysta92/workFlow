import React from 'react';
import { BrowserRouter as Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../redux/_actions';

import LoginPage from '../components/login-page';



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

	render() {
		return this.props.loggedIn ? 
			<Redirect to={'/logout'}/> :
			<LoginPage submitHandler={this.authorize} />
	}
}



const mapStateToProps = (state) => {
	const { loggedIn } = state.authorization;
	return { loggedIn };
};

const connectedLogin = withRouter(connect(mapStateToProps)(Login));
export { connectedLogin as Login }
