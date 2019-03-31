import React from 'react';
import LoginForm from './login-form';
import style from './style.scss';

const LoginPage = (props) => {
	return (
		<div className={'container-fluid'}>
			<div className={'row'}>
				<div className={'col-6 tips-container'}>
					<h1>{'Proin lacus elit, luctus non tempor'}</h1>
				</div>
				<div className={'col-6 login-container'}>
					<div>
						<h2>{'Hello '}<span>{'stranger!'}</span></h2>
						<LoginForm onSubmit={this.props.submitHandler} policy={policy}/>
						<p className={'mt-5 mb-3 text-muted'}>{'© 2017-2018'}</p>
					</div>
				</div>
			</div>
		</div>
	)
};

export default LoginPage;


/*



*/