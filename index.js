const server = require('./server'),
	app = require('./core'),
	path = require('path'),
	port = process.env.NODE_ENV === 'production' ? 80 : 3000;


const launch = (port, app) => {
	server.run(port);

};
app.registerApi('testapi', 'value');
app.execute(function(app) {
});
console.log(app);

launch(port, app);

