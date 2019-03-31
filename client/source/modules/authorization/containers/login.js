import React from 'react';

import { connect } from 'react-redux';
import { addTask, removeTask } from '../actions';

import LoginForm from './components/login-form';
import LoginPage from './components/login-page';


const mapStateToProps = (state, ownProps) => ({
	tasks: state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	addTask: task => dispatch(addTask(task)),
	removeTask: id => dispatch(removeTask(id)),
})


const policy = `asdasd`;

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submitStatus: false,
		}
	}

	render() {
		
		return (
			<LoginPage>
				<h2>{'Hello '}<span>{'again!'}</span></h2>
				<LoginForm onSubmit={this.submitHandler} policy={policy}/>
				<p className={'mt-5 mb-3 text-muted'}>{'© 2017-2018'}</p>
			</LoginPage>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
