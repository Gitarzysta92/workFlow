import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import Login from './login';
import Register from './register';
import Logout from './logout';

import AuthRouter from './auth-route';


const credentials = {
	username: 'root@root.pl',
	password: 'root'
}

const authRouter = new AuthRouter();
const AuthRoute = authRouter.route; 


class Authorizer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		}
	}

	authorize = ({email, password}) => {
		if (credentials.username === email && credentials.password === password) {
			this.setState({user: credentials});
			return true;
		} else {
			return false;
		}
	}

	unAuthorize = () => {
		const authorized = this.state.user.hasOwnProperty('username');

		if (authorized) {
			this.setState({user: {}})	
		}
		
	}

	componentDidUpdate() {
		const authorized = this.state.user.hasOwnProperty('username');
		authRouter.update(authorized);
	}

	render() {
		return (
			<div>
				<Route path="/login"
					render={(routeProps) => (
						<Login 
							{...routeProps} 
							authorization={this.authorize}
						/>
					)}
				/>
				<Route path="/logout"
					render={(routeProps) => (
						<Logout
							{...routeProps} 
							unAuthorization={this.unAuthorize}
							redirect={'/login'}
						/>
					)}
				 />
				<Route path="/register" component={Register}/>
			</div>
		);
	}
}

export { Authorizer,  AuthRoute };
