import React from 'react';

const LoginPage = (props) => {
	return (
		<div className={'container-fluid'}>
			<div className={'row'}>
				<div className={'col-6 tips-container'}>
					<h1>{'Proin lacus elit, luctus non tempor'}</h1>
				</div>
				<div className={'col-6 login-container'}>
					<div>
						{props.children}
					</div>
				</div>
			</div>
		</div>
	)
};

export default LoginPage;


/*



*/