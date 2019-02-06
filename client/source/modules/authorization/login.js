import React from 'react';
import { Redirect } from 'react-router-dom';

import style from './style.scss';
import LoginForm from './components/login-form'

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

	throwError() {
		this.setState({submitStatus: new Error(result)})
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/'}}; 
		const { submitStatus } = this.state;

		if (submitStatus === true) {
			return <Redirect to={from} />;
		} else if (submitStatus) {
			
		}
		return (
			<div>
				<h2>{'Hello '}<span>{'again!'}</span></h2>
				<LoginForm onSubmit={this.submitHandler} policy={policy}/>
				<p className={'mt-5 mb-3 text-muted'}>{'© 2017-2018'}</p>
			</div>
		)
	}
}

export default Login;
