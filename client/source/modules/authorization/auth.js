import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


// Views components
import Login from './login';
import Register from './register';
import Logout from './logout';

// Utils
import Cookie from '../../utils/cookieSetter';
import AuthRouter from './auth-route';

const authRouter = new AuthRouter();
const AuthRoute = authRouter.route; 


const credentials = {
	username: 'root@root.pl',
	password: 'root'
}

const sessionToken = {
	id: '123'
}

/*

const cookie = new Cookie(credentials.username, sessionToken.id);

cookie.add = 10;

console.log(cookie.data)

cookie.remove()
console.log(document.cookie);

*/

class Authorizer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		}
		this.cookie = new Cookie('wfSession');
		this._isSessionExists();
	}

	// Look for existing session
	// if exists get user data and set routes access
	_isSessionExists() {
		if (this.cookie.data === sessionToken.id) {
			this.state.user = credentials;
			this.setupRouter();

		}
 	}

	// Check is given login details is vaild
	// then add user details to component state
	authorize = ({email, password}) => {
		if (credentials.username === email && credentials.password === password) {
			this.setState({user: credentials});
			this.cookie.value = sessionToken.id;
			this.cookie.add = 1;
			return true;
		} else {
			return false;
		}
	}

	// Remove user details from component state
	unAuthorize = () => {
		const authorized = this.state.user.hasOwnProperty('username');
		if (authorized) {
			this.setState({user: {}});
			this.cookie.remove();	
		}	
	}

	// Check is user is authorized
	// and set route access
	setupRouter() {
		const authorized = this.state.user.hasOwnProperty('username');
		authRouter.access(authorized);
	}

	
	componentDidUpdate() {
		this.setupRouter();	
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
				<Route exact path="/register" component={Register}/>
			</div>
		);
	}
}

export { Authorizer,  AuthRoute };
