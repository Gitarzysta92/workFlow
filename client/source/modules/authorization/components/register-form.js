import React from 'react';


import InputText from './partials/input-text';
import InputEmail from './partials/input-email';
import InputPassword from './partials/input-password';
import SubmitButton from './partials/submit-button';
import Policy from './partials/form-input-subtext';


class RegisterForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			secondName: '',
			email: '',
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
		return this.state.email.length > 0 &&
			this.state.password.length > 0;
	}

	render() {
		return (
			<form className={'form-signin'} onSubmit={this.handleSubmit}>
				<InputText
					id={'name'}
					placeHolder={'Your Name'}
					value={this.state.email} 
					onChange={() => this.handleChange} 
				/>
				<InputText
					id={'secondName'}
					placeHolder={'Your Surname'}
					value={this.state.email} 
					onChange={() => this.handleChange} 
				/>
				<InputEmail 
					value={this.state.email} 
					onChange={() => this.handleChange} 
				/>
				<InputPassword 
					value={this.state.password} 
					onChange={() => this.handleChange} 
				/>	
				<Policy text={this.props.policy}/>
				<SubmitButton 
					text={'Submit'} 
					validate={this.validateForm.bind(this)} 
				/>	
			</form>
		)
	}
}

export default RegisterForm;
