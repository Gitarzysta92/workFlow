import AppContainer from './app-container';
import { 
	session, 
	routesAuthorization,
	ReactiveContainer,
	dataProvider, 
	createView, 
	MOUNTPOINT 
} from './internal-api-provider';




const app = function(setup) {
	const { modComponents, reduxStore, path, layout } = setup;
	const _sessionName = 'App-Session';
	const _defaultUserType = 'notRegistered'; 

	// get session data
	const _appSession = session.create(_sessionName);
	const { state: storedState, 
			userType: storedUserType,
			token: storedToken
	} = _appSession.storage;


	// Create container for application meta data
	const _appReg = new ReactiveContainer({
		parameters: {
			token: storedToken || false,
			userType: storedUserType || _defaultUserType
		}
	});

	_appReg.items.token.subscribe(_appSession.update);
	_appReg.items.token.subscribe(dataProvider.setHeaderProperty);

	_appReg.items.userType.subscribe(_appSession.update);
	_appReg.items.userType.subscribe(routesAuthorization.provideUserType);


	// Create redux store
	const _store = createStore(storedState, reduxStore);
	_store.subscribe(
		saveStateToSesionStorage(_store, _appSession.update),
	);	

	// Prepare app container
	const _container = createAppContainer(modComponents, layout);

	return {
		session: _appSession,
		registry: _appReg.items,
		AppContainer: _container,
		store: _store
	};
};


function createAppContainer(components, appLayout) {
	return components && appLayout ? 
		createView({
			container: AppContainer,
			components: components,
			template: {
				left: MOUNTPOINT.sidebarLeft,
				center: MOUNTPOINT.main,
				right: MOUNTPOINT.sidebarRight
			},
			layout: appLayout,
			bypass: {
				root: MOUNTPOINT.root
			}
		}) 
		: false;
}


function createStore(storedState, store) {
	const state = Object.assign({}, storedState);
	return store(state);
}


function saveStateToSesionStorage(store, sessionUpdate) {
	return function() {
		const state = store.getState();
		sessionUpdate({ state });
	}
}


export default app;