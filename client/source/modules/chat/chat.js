import React from 'react';
import { JoinToHoc } from 'Utils';

import { SecureRoute, PATHS } from 'InternalApi';

import { Nav } from './containers'

class Chat extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Nav/>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	const { loggedIn, user } = state.authorization;
	return { loggedIn, user };
};

export default JoinToHoc(Chat);