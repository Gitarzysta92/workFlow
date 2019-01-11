// ------------------
// Mongo database config
// ------------------

// Init module interface
const mod = new Mod(__filename);

// Pivate
const mongoConfig = {
	url: 'mongodb://localhost:27017',
	dbName: 'myproject'
}

// Public
mod.publish(() => mongoConfig);

module.exports = mod;
	


