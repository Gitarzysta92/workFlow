import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../redux/_actions';

import LoginPage from './components/login-page';



class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submitStatus: false,
		}
	}

	authorize = ({ username, password }) => {
		const { dispatch } = this.props;

		if (username && password) {
			dispatch(userActions.login(username, password));
		}
	}

	render() {
		return (
			<LoginPage submitHandler={authorize} />
		)
	}
}


const mapStateToProps = (state) => ({
	tasks: state
})

export default connect(mapStateToProps)(Login);
