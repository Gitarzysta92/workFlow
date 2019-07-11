import { Cookie } from 'Utils';
import uuidv4 from 'uuid/v4';


class Session {
	constructor(name, { storage = {}, ...rest} = {}) {
		this._id = uuidv4();
		this._name = name;
		this._storage = this._getStorageInitialData(storage); 

		return {
			name: this.getSessionName(),
			storage: this.getSessionStorage(),
			update: this.setStorage.bind(this),
			close: this.closeSession.bind(this)
		}
	}

	getSessionName() {
		return this._name;
	}

	getSessionStorage() {
		return this._storage;
	}

	setStorage(withNewProperties) {
		const updatedStorage = this._createUpdatedStorage(withNewProperties);
		this._storage = updatedStorage;
		this._setToBrowserStorage(updatedStorage);
		return this._storage;
	}

	closeSession(args = {}) {
		const { withNewProperties } = args;
		const storage = withNewProperties ? 
				this.setStorage(withNewProperties) :
				this.getSessionStorage();
		this._close();
	}

	_getStorageInitialData(initData) {
		const storedData = this._getFromBrowserStorage();
		const mergedData = Object.assign(initData, storedData);
		return this._createUpdatedStorage(mergedData);
	}

	_createUpdatedStorage(newProperties) {
		const storage = this.getSessionStorage() || {};
		return Object.assign(storage, newProperties);
	}

	_setToBrowserStorage(sessionStorage) {
		const sessionName = this.getSessionName();
		window.localStorage.setItem(sessionName, JSON.stringify(sessionStorage));	
	}

	_getFromBrowserStorage() {
		const sessionName = this.getSessionName();
		return JSON.parse(window.localStorage.getItem(sessionName));
	}

	_close() {
		const sessionName = this.getSessionName();
		window.localStorage.removeItem(sessionName);
		sessionHandler._deleteSession(sessionName);
	}

}

const sessionHandler = { _sessions: [] };
const sessions = sessionHandler._sessions;


sessionHandler.create = function(name, rest) {
	const session = new Session(name, rest);
	sessions.push(session);
	return session;
}

sessionHandler.getSession = function(queryByprop) {
	const { id, name } = queryByprop;

	return session.find(current => {
		return (name && name === current.name) || (id && id === current.id);
	});
}

sessionHandler._deleteSession = function(sessionName) {

}

/**
// Session handler api consume example

const userSession = sessionHandler.newSession('User Session',{
	storage: {
		token: 'ApiToken',
		state: 'stateObject',
		propsToShareBeetweenTabs: 'prop'
	},
	options: {
		keepSession: {
			time: 1000
		},
		legacy: true
	}
})

// Get stored token
const userSessionToken = userSession.storage.token;

// Get stored state
const userSessionState = userSession.storage.state;
**/

export default sessionHandler;
