import React from 'react';
import { JoinToHoc } from 'Utils';

import { SecureRoute, PATHS } from 'InternalApi';








class UserPanel extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	const { loggedIn, user } = state.authorization;
	return { loggedIn, user };
};

export default JoinToHoc(UserPanel);