// ------------------
// Basic CRUD operations API
// ------------------

// Init module interface
const mod = new Mod(__filename);


//load node modules dependencies


//load module manager dependencies
mod.expect({name: 'instance.mongo.js'})

// Private

// Public
mod.publish(async function(mongoInstance) {
	//prepare mongo instance
	const database = await mongoInstance;
	return {
		//
		// Gat all mached items from given collection
		// input: query key object
		//
		getAll: function(key, collectionName) {
			return database.collection(collectionName).find(key);
		},
		//
		// Get first mached item from given collection
		// input: query key object
		//
		getSingle: function(key, collectionName) {
			return database.collection(collectionName).findOne(key);
		},
		//
		// Insert all items to given collection
		// input: array shema object items
		//
		insertAll: function(items, collectionName) {
			return database.collection(collectionName).insertOne(item);
		},
		//
		// Insert single item to given collection
		// input: item shema object
		//
		insertSingle: function(item, collectionName) {
			return database.collection(collectionName).insertOne(item);
		},

		// update()
		// updateOne()
		// updateMany()
		// findAndModify()
		// findOneAndUpdate()
		// findOneAndReplace()
		// bulkWrite()

		//
		// Delete all mached items from given collection
		// input: query object with proper operators 
		//
		deleteAll: function(query, collectionName) {
			return database.collection(collectionName).deleteMany(query);
		},
		//
		// Delete first mached item from given collection
		// input: query object with proper operators 
		//
		deleteSingle: function(query, collectionName) {
			return database.collection(collectionName).deleteOne(query);
		},
	}
});

module.exports = mod;