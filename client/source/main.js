import React from 'react';
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

import { Provider } from 'react-redux';
import createStore from './redux/store';

import App from './application';
import { appLayout } from './components'
import Modules from './modules';
import { PATHS } from 'Constants';

const History = createBrowserHistory();
const modules = Modules.getModules('component', 'mountPoint');


const { store, 
		AppContainer, 
		session,
		registry
	} = App({
		modComponents: modules,
		reduxStore: createStore,
		path: PATHS.App,
		layout: appLayout
	});


class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(session.storage);
		return (
			<Provider store={store}>
				<Router history={History}>
					<AppContainer
						session={session}
						registry={registry}
					/>
				</Router>
			</Provider>
		)
	}
}

export default Main;