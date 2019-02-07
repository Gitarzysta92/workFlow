import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';



class AuthRouter {
	constructor() {
		this.isAuthenticated = false;
	}

	update(state) {
		this.isAuthenticated = state;
	}

	route = ({ component: Component, ...rest }) => (
		<Route {...rest} render={(props) => (
			this.isAuthenticated === true
				? <Component {...props} />
				: <Redirect to={{
						pathname: '/login',
						state: { from: props.location }
					}} />
		)} />
	)
}


export default AuthRouter;
