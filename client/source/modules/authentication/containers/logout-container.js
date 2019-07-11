import React from 'react';
import { Redirect } from 'react-router-dom';
import { JoinToHoc } from 'Utils';
import { PATHS } from 'InternalApi';

import { userActions } from '../redux/_actions';

const Logout = (props) => {
	const { dispatch } = props;
	dispatch(userActions.logout());
	return (
		<div className={'signin-approval'}>
			<Redirect to={PATHS.UserAuthorization}/>
		</div>
	);
}

		
const wrappedLogout = JoinToHoc(Logout, {redux: true});		
export { wrappedLogout as Logout };

