const Session = require('./session.js');


class UserSessionHandler {
	constructor() {
		this.sessions = [];
	}

	createSession(userData) {
		const session = new Session(userData);
		this.sessions.push(session);
		return session;
	}

	getSession(queryObj) {
		const queries = Object.getOwnPropertyNames(queryObj);
		return this.sessions.find(current => {
			return queries.every(query => {
				const property = current.hasOwnProperty(query);
				if (property) {
					return current[query] === queryObj[query] ? true : false;
				};	
			})
				//current[query.key] === token
		});
	}
}



module.exports = UserSessionHandler;