


class Client {
	constructor(headers) {
		this.token = headers.token;
		this.appkey = headers.appkey;
		this.host = headers.host;
		this.requestTreshold = 50;
		this.tresholdList = [];
	}

	set request(reqObj) {
		const currentReq = new Date();
		const previusReq = this.tresholdList[this.tresholdList.length - 1];
		
		if (currentReq - 1000 > previusReq) {
			this.tresholdList.shift();
		}

		this.tresholdList.push(currentReq);
		console.log(this.tresholdList.length);
		if (this.checkTreshold()) console.log('overlimit');
	}

	checkTreshold() {
		const treshold = this.requestTreshold;
		const req = this.tresholdList; 
		return treshold > req.length ? false : true;
	}

	// TO DO:
	// 1. Add self destroy after request treshold reach
	// - add callback from main module
	// 2. Create banned clients list
	//


}


 // 'cache-control': 'no-cache',
  //'postman-token': '1f2e0ebb-2111-4e2e-8fd0-69d7f2c293bc',
  //'user-agent': 'PostmanRuntime/7.6.0',
  //accept: '*/*',

  //'accept-encoding': 'gzip, deflate',
  //connection: 'keep-alive' }
module.exports = Client;


