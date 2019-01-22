


class Client {
	constructor(headers) {
		this.token = headers.token;
		this.appkey = headers.appkey;
		this.host = headers.host;
		this.requestLimit = 50;
		this.requestList = [];
	}

	set request(reqObj) {
		this.requestList.push(reqObj);
	}
}


 // 'cache-control': 'no-cache',
  //'postman-token': '1f2e0ebb-2111-4e2e-8fd0-69d7f2c293bc',
  //'user-agent': 'PostmanRuntime/7.6.0',
  //accept: '*/*',

  //'accept-encoding': 'gzip, deflate',
  //connection: 'keep-alive' }
module.exports = Client;


