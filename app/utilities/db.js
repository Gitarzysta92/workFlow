const MongoClient = require('mongodb').MongoClient,
	assert = require('assert');


const url = 'mongodb://localhost:27017';

const dbName = 'myproject';

/*
MongoClient.connect(url, function(err, client) {
	assert.equal(null, err);
	console.log('Connected successfully to server');

	console.log(client.db(dbName));

});
*/



const mongoClient = (function (req, res, next){
	let instance;

	function createInstance() {
		const client = new MongoClient(url, { useNewUrlParser: true });
		return client;
	}

	return {
		getInstance: function() {
			if (!instance) {
				instance = createInstance();
				
			}
			return instance;
		}
	}
})();

module.exports = (async function() {
	const client = mongoClient.getInstance();

	await client.connect().catch((err) => { console.log(err); });

	const db = client.db(dbName);
	return db;
})();




//{ useNewUrlParser: true }


