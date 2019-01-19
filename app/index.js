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


// Load main application object
const Application = require('./system');
const app = new Application();


// Load and setting Main Controller
const Controller = require('./controller/mainController');
app.globalController = new Controller(app.eventsEmitter);


// Load and setting Main Controller
const Authorizer = require('./system/request-auth');
app.httpAuthorizer = new Authorizer();


// Load and setting Global Router
const Router = require('./router/globalRouter'); 
app.globalRouter = new Router(app.eventsEmitter);


// Setup routes
let routes = modulesList.getAllPublished({type: 'routes'});
routes = app.httpAuthorizer.setAuthorization(routes);
app.globalRouter.setRoutes(routes);



// Start http server
const port = process.env.NODE_ENV === 'production' ? 80 : 3000;
const server = modulesList.getPublished({name: 'server.mod.js'});

server(port, app.globalRouter.getRouterInstance());

