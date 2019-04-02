import React from 'react';
import { Redirect } from 'react-router-dom';


const Logout = () => {
	return (
		<div className={'signin-approval'}>
			<Redirect to={{ pathname: '/login'}} />
			<small>{'text'}</small>
		</div>
	);
}
		

export { Logout };
