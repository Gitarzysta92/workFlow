const sessionList = [];

module.exports.session = function(userID) {
	const session = new UserSession(userID);
	sessionList.push(session);
	return session;
};

module.exports.list = function() {
	return sessionList;
};


class UserSession {
	constructor(userID) {
		this.initDate = Date.now();
		this.expiryDate = this.initDate;
		this.token = {
			user_id: userID,
			token_id: uniqueId(10),
			exp_date: this.expiryDate
		}
	}

	getToken() {
		this.expiry();
		return this.token;
	}

	expiry() {
		this.timer = setInterval(() => {
			if (this.expiryDate > this.initDate + 10000) {
				console.log(this, 'destroyed')
				this.destroy();
			}
			this.expiryDate += 1000;
		}, 1000);

	}

	destroy() {
		clearInterval(this.timer);

	}
}





function uniqueId(length){
	let signs = 'ABCDEFGHIJKOPRST123456789',
		id = [];

	for (let i = 0; i < length; i++) {
		let rand = Math.floor(Math.random() * signs.length);
		id.push(signs.charAt(rand));
	}

	return id.join('');
}