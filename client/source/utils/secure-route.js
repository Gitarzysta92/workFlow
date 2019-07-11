import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const SecureRoute = function({ component: Component , passProps, passRender, ...rest}, authorized) {
	const { path, match, ...staticParams} = rest;
	const preparedPath = preparePath(path, match);
	const preparedRoute = (<Route path={preparedPath} {...staticParams} render={
		(props) => {
			const matchResult = Component 
				? prepareComponent(Component, passProps, props)
				: passRender();

			console.log(path, authorized);
			return authorized
				? matchResult
				: <Redirect to={ '/login' } />
			}
		}/>)

	return preparedRoute;
}

function preparePath(path, match) {
	if (!match) return path;
	const parentPath = match.path !== '/' ? match.path : '';
	const combinedPath = path !== '/' ? (parentPath + path) : match.path;
	return path;
}

function prepareComponent(Component, passedProps, ownProps) {
	const props = passedProps ? Object.assign(ownProps, passedProps) : ownProps;
	return (<Component {...props} />);
}



