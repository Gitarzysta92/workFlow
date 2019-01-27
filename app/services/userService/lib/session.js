const access = application.httpAuthorizer.accessModels;

console.log(access);

class UserSession {
	constructor(data) {
		this.name = data.username;
		this.accessLevel = data.accessLevel || 'subscriber';
		this.initDate = Date.now();
		this.expiryDate = this.initDate;
		this.userToken = {
			//token_id: uniqueId(10),
			token_id: 'token',
			exp_date: this.expiryDate
		}
		this.token = this.userToken.token_id; 
		this.registerAuthToken();
	}


	getToken() {
		this.expiry();
		return this.userToken;
	}

	//get token() {
		//return this.userToken.token_id;
	//}

	expiry() {
		this.timer = setInterval(() => {
			if (this.expiryDate > this.initDate + 10000) {
				this.destroy();
			}
			this.expiryDate += 1000;
		}, 1000);

	}

	destroy() {
		clearInterval(this.timer);
		console.log(this, 'destroyed');
	}

	registerAuthToken() {
		const accessModel = access[this.accessLevel];
		accessModel.addToken = this.token;
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


module.exports = UserSession;