import React from 'react';
import RegisterForm from './register-form';
import style from './style/style.scss';

const policy = `Policy`;

const RegisterPage = (props) => {
	return (
		<div className={'container-fluid'}>
			<div className={'row'}>
				<div className={'col-6 tips-container'}>
					<h1>{'Proin lacus elit, luctus non tempor'}</h1>
				</div>
				<div className={'col-6 login-container'}>
					<div>
						<h2>{'Hello '}<span>{'stranger!'}</span></h2>
						<RegisterForm onSubmit={props.submitHandler} policy={policy}/>
						{props.alert}
						<p className={'mt-5 mb-3 text-muted'}>{'© 2017-2018'}</p>
					</div>
				</div>
			</div>
		</div>
	)
};

export default RegisterPage;


/*



*/