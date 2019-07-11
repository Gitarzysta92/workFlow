import React from 'react';
import { JoinToHoc } from 'Utils';
import { Redirect } from 'react-router-dom';

import Loader from '../components/loader'
import { apiCaller, SecureRoute, PATHS } from 'InternalApi';


class AppContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAppLoaded: this._checkStatus()
		}
	} 

	injectRootModules() {	
		const rootComponents = this.props.untemplated.root
		return rootComponents ? rootComponents.map((Current, index) => (<Current key={index}/>)) : 'No modules';
	}

	componentDidUpdate() {
		const { authenticated, session } = this.props;
		this._isReadyToLoadData() && this._loadAppData(() => {
			this.setState({ isAppLoaded: true });
		});	
		if (!authenticated && this.state.isAppLoaded) {
			this.setState({ isAppLoaded: false });
			session.close();
		}	 
	}

	_checkStatus() {
		console.log(this.props);
	}

	_isReadyToLoadData() {
		const { authenticated } = this.props;
		return (authenticated && !this.state.isAppLoaded);
	}

	_loadAppData(done) {
		const { token, registry } = this.props;
		console.log(this.props);
		registry.token.setValue(token);
		this.fetchUserMetaData = apiCaller('get-current-user-data').then(data => {
			const { userType = 'user' } = data
			this.fetchUserMetaData = null;
			console.log(data);
			registry.userType.setValue(userType);
		}).then(done())
	}

	render() {
		if (this._isReadyToLoadData()) {
			return <Loader/>
		} else {
			return (
				<div>
					<SecureRoute 
						exact
						match={this.props.match} 
						path={PATHS.root} 
						passRender={() => (<Redirect to={PATHS.app}/>)}
					/>
					<SecureRoute 
						match={this.props.match}
						path={PATHS.app} 
						passRender={() => (this.props.content)}
					/>
					{this.injectRootModules()}
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => {
	const { authenticated, token } = state.authentication;
	return { authenticated, token };
};


export default JoinToHoc(AppContainer, {mapStateToProps});