import React from 'react';
import style from './style.scss';

import RegisterForm from './components/register-form'

const policy = `asdasd`;

class Register extends React.Component {
	constructor(props) {
		super(props);
	}

	submitHandler = formData => {
		console.log(formData);
	}

	render() {
		console.log(this.props.location.state );
		return (
			<div>
				<h2>{'Hello '}<span>{'stranger!'}</span></h2>
				<RegisterForm onSubmit={this.submitHandler} policy={policy}/>
				<p className={'mt-5 mb-3 text-muted'}>{'© 2017-2018'}</p>
			</div>
		)
	}
}

export default Register;