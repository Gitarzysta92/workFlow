import React from 'react';

import { JoinToHoc } from 'Utils';

import { NAVPATHS } from 'InternalApi';
import Category from '../components/category';


class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submitStatus: false
		}
	}


	prepareMenuModel() {
		const navPaths = Object.getOwnPropertyNames(NAVPATHS);

		return navPaths.map((current, index) =>  <Category key={index} items={NAVPATHS[current]} /> )
		
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