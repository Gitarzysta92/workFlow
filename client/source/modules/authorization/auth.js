import React from 'react';
import { BrowserRouter as Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Views components
import { Login, Logout, Register } from './containers';


class Authorizer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		}
	}

	componentDidUpdate() {
		console.log(this.props.user);
	}

	render() {
		return (
			<div>
				<Route path="/login" component={Login}/>
				<Route path="/logout" component={Logout} />
				<Route path="/register" component={Register}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { loggedIn, user } = state.authorization;
	return { loggedIn, user };
};

export default withRouter(connect(mapStateToProps)(Authorizer));

