import React from 'react';
import { JoinToHoc } from 'Utils';

import { SecureRoute, PATHS } from 'InternalApi';


class UserWidget extends React.Component {
	constructor(props) {
		super(props);
	}

	_loadData() {
		const { dispatch } = this.props;
		if (username && password) {
			dispatch(userActions.login(username, password));
		}
	}

	render() {
		return (
			<div>
				{'asda'}
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	
	return state;
};

export default JoinToHoc(UserWidget, {mapStateToProps});