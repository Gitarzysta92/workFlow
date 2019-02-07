import React from 'react';
import { Redirect } from 'react-router-dom';


const Logout = ({unAuthorization, redirect}) => {

	unAuthorization();
	return (
		<div className={'signin-approval'}>
			<Redirect to={{ pathname: '/login'}} />
			<small>{'text'}</small>
		</div>
	);
}
		
export default Logout;
