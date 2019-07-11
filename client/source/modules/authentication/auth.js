import React from 'react';
import { Redirect } from 'react-router-dom';
import { JoinToHoc } from 'Utils';


import { SecureRoute, PATHS } from 'InternalApi'

// Views components
import { Login, Logout, Register } from './containers';



class Authentication extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<SecureRoute exact path={PATHS.UserAuthorization} component={Login}/>
				<SecureRoute path={PATHS.UserLogout} component={Logout} />
				<SecureRoute path={PATHS.UserRegistration} component={Register}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { loggedIn, user } = state.authorization;
	return { loggedIn, user };
};

export default JoinToHoc(Authentication);