import React, { Component } from 'react';
import { userSession, SecureRoute, PATHS } from 'InternalApi';
import { JoinToHoc } from 'Utils';

const Temp = () => (<div>asd</div>)




class CooBoard extends Component {
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
		return (
			<SecureRoute match={this.props.match}  exact path={PATHS.CooBoard} component={Temp}/>
		);
	}
}


export default CooBoard;