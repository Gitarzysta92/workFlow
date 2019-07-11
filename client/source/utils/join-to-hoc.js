import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';




function JoinToHoc(Component, data) {
	let component = Component;
	const { mapStateToProps } = data || false;
	const { redux } = data || false;
	let connected;


	if (mapStateToProps) {

		component = connect(mapStateToProps)(component);
	} else if (redux) {
		component = connect()(component);
	} 


	return (withRouter(component));
}


export { JoinToHoc };