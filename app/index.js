// ------------------------
// Load and setup main system modules
// ------------------------

// ###################
// Load synchronous module manager
//
const Manager = require('./system/modules-manager').sync;
const manager = new Manager();

// Register modules with given subname
const modulesType = ['.mod.','.config.','.routes.', '.mongo.', '.controller.'];
const modulesList = manager.registerModules(modulesType);

// 
const database = modulesList.getPublished({name: 'crud.mongo.js'});

// Load main application object
const Application = require('./system');
const app = new Application();

// Load express server lib
app.express = require('express');

// Load and setting Main Controller
const Controller = require('./controller/mainController');
app.globalController = new Controller(app.eventsEmitter);


// Load and setting Http request authorizer
const HttpAuthorizer = require('./system/request-authorization');
app.httpAuthorizer = new HttpAuthorizer();


// Load client stats and authorization
const ClientAuthorizer = require('./system/client-authorization');
app.clientAuthorizer = new ClientAuthorizer({
	db: database
});


// Load and setting Global Router
const Router = require('./router/globalRouter'); 
app.globalRouter = new Router(app.eventsEmitter, app.express);


// Setup routes
let routes = modulesList.getAllPublished({type: 'routes'});
routes = app.httpAuthorizer.setAuthorization(routes);
routes = app.clientAuthorizer.setAuthorization(routes);
app.globalRouter.setRoutes(routes);


// Load and setting Global Router
const errorHandler = require('./utilities/errorHandler');
const expressInstance = app.express();


// Start http server
const port = process.env.NODE_ENV === 'production' ? 80 : 3000;
const server = modulesList.getPublished({name: 'server.mod.js'});

server(port, app.globalRouter.getRouterInstance(), expressInstance);

expressInstance.use(errorHandler);