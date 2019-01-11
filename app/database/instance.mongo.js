// ------------------
// Mongo database instance
// ------------------

// Init module interface
const mod = new Mod(__filename);

//load node modules dependencies
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//load module manager dependencies
mod.expect({name: 'mongo.config.js'})

// Private
const getClient = function(url) {
	return new MongoClient(url, { useNewUrlParser: true });
}

// Public
mod.publish(async function(mongoConfing) {
	const client = getClient(mongoConfing.url);

	await client.connect().catch(err => console.log(err));

	return client.db(mongoConfing.dbName)
});

module.exports = mod;

