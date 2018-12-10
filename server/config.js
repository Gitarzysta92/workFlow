const fs = require('fs');
const bodyParser = require('body-parser');
const app = require('../core');


console.log()

module.exports = (server) => {
	server.use(bodyParser.urlencoded({ extended: false }));
	server.use(bodyParser.json());

	//server.use('/', globalRouter.router.GlobalRouter.router);
	return server;
}