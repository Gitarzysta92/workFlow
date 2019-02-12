import React from 'react';
import { Redirect } from 'react-router-dom';

import style from './style.scss';
import LoginForm from './components/login-form';
import LoginPage from './components/login-page';

const policy = `asdasd`;

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submitStatus: false,
		}
	}

	submitHandler = formData => {
		const result = this.props.authorization(formData);
		result ? this.setState({submitStatus: true}) : this.throwError(result);
	}

	throwError(errMessage) {
		this.setState({submitStatus: new Error(errMessage)})
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/'}}; 
		const { submitStatus } = this.state;

		if (submitStatus === true) {
			return <Redirect to={from} />;
		} else if (submitStatus) {
			
		}
		return (
			<LoginPage>
				<h2>{'Hello '}<span>{'again!'}</span></h2>
				<LoginForm onSubmit={this.submitHandler} policy={policy}/>
				<p className={'mt-5 mb-3 text-muted'}>{'© 2017-2018'}</p>
			</LoginPage>
		)
	}
}

export default Login;
