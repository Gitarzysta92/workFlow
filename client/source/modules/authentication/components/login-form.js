import React from 'react';

import InputUsername from './partials/input-username';
import InputPassword from './partials/input-password';
import SubmitButton from './partials/submit-button';
import Policy from './partials/form-input-subtext';


class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state);
	}

	validateForm() {
		return this.state.username.length > 0 &&
			this.state.password.length > 0;
	}

	render() {
		return (
			<form className={'form-signin'} onSubmit={this.handleSubmit}>
				<InputUsername value={this.state.username} onChange={() => this.handleChange} />
				<InputPassword value={this.state.password} onChange={() => this.handleChange} />	
				<Policy text={this.props.policy}/>
				<SubmitButton text={'Submit'} validate={this.validateForm.bind(this)} />	
			</form>
		)
	}
}

export default LoginForm;
