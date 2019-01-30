// ------------------------
// Load and setup main system modules
// ------------------------

// Load express server lib
const express = require('express');


// Load main application object
const Application = require('./system');
const app = new Application();


app.filesManager.setDependencies(app);
// Register modules with given subname
const type = ['.mod.','.config.','.routes.','.controller.'];
const modulesList = app.filesManager.registerModules(type);


// Load and setting Main Controller
const Controller = require('./controller/mainController');
const mainController = new Controller(app.eventsEmitter);


// Load and setting Global Router
const Router = require('./router/globalRouter'); 
const globalRouter = new Router(mainController.wrapper, express);


// Load and setting Global Router
const errorHandler = require('./utilities/errorHandler');
globalRouter.addMiddleware({
	name: 'Error-handler',
	type: 'use',
	hook: 'error-handling',
	controller: errorHandler
})


// Setup routes
let routes = modulesList.getAllPublished({type: 'routes'});
//routes = app.httpAuthorizer.setAuthorization(routes);
routes = app.clientAuthorizer.setAuthorization(routes);
globalRouter.setRoutes(routes);




// Start http server
const expressInstance = express();
const port = process.env.NODE_ENV === 'production' ? 80 : 3000;
const server = modulesList.getPublished({name: 'server.mod.js'});

server(port, globalRouter.getRouterInstance(), expressInstance);




