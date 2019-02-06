import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import Login from './login';
import Register from './register';


const SecretRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		AuthService.isAuthenticated === true
			? <Component {...props} />
			: <Redirect to={{
					pathname: '/login',
					state: { from: props.location }
				}} />
	)} />
);


const AuthService = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  logout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}


const credentials = {
	username: 'root@root.pl',
	password: 'root'
}


class Authorizer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	authorize = givenCredentials => {
		return true;
	}

	render() {
		return (
			<div>
				<Route path="/login"
					render={(routeProps) => (
						<Login 
							{...routeProps} 
							authorization={asd}
						/>
					)}
				/>
				<Route path="/register" component={Register}/>
			</div>
		);
	}
}

export {
	SecretRoute,
	Authorizer
};
