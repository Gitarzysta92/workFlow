import React from 'react';
import { NavLink } from 'react-router-dom';
import { JoinToHoc } from 'Utils';

import { SecureRoute, NAVPATHS } from 'InternalApi';
//import { userActions } from '../redux/_actions';

const asd = {
	
}


class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submitStatus: false,
		}
	}

	prepareMenuModel() {
		console.log(NAVPATHS);
		return NAVPATHS.map((current, index) => (<NavLink key={index} to={current.path}>{current.label}</NavLink>));
	}

	render() {
		
		return (
			<div>
				{this.prepareMenuModel()}
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	const { loggedIn } = state.authorization;
	return { loggedIn };
};

const connectedLogin = JoinToHoc(Nav);
export { connectedLogin as Nav }