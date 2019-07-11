import React, { Component } from 'react';
import { userSession, SecureRoute, PATHS } from 'InternalApi';
import { JoinToHoc } from 'Utils';

import { user } from 'InternalApi';
import NewsContainer from './containers/news-container';
import BoardContainer from './components/board-container';




class DashBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};
	}

	updateUser() {
		//setState
	}

	render() {
		//user.storeSession();
		return (
			<SecureRoute match={this.props.match}  exact path={PATHS.Dashboard} component={NewsContainer}/>
		);
	}
}


export default JoinToHoc(DashBoard);