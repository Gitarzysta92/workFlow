import React from 'react';
import { JoinToHoc } from 'Utils';


class AlertBox extends React.Component {
	constructor(props) {
		super(props);
	}


	successAlert(type, message) {
		return type === 'successAlert' ? (
			<div className={'alert alert-success'}>
				{message}
			</div>
		) : null;
	}

	failureAlert(type, message) {
		return type === 'failure' ? (
			<div className={'alert alert-danger'}>
				{message}
			</div>
		) : null;
	}


	render() {
		const { type, message } = this.props.alertMessage; 
		return (
			<div>
				{this.failureAlert(type, message)}
				{this.successAlert(type, message)}
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	const alertMessage = state.actionAlert; 
	return { alertMessage };
};

const connectedRegister = JoinToHoc(AlertBox, { mapStateToProps });
export { connectedRegister as AlertBox }
