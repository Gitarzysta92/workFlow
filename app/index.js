// ------------------------
// Load main system modules
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
const app = modulesList.getPublished({name: 'app.mod.js'});


// Load and setup event emiter

const EventEmitter = require('events');
class AppEmitter extends EventEmitter {};


app.eventEmitter = new AppEmitter();


// Load and setting Main Controller
const Controller = require('./controller/mainController');
app.globalController = new Controller(app.eventEmitter);


//const controllerInterface = mainController.prepare.bind(mainController);

// Load and setting Main Controller
const Authorizer = require('./system/request-auth');
app.httpAuthorizer = new Authorizer();


// Get all routes
const routes = modulesList.getAllPublished({type: 'routes'});


// Load and setting Global Router
const Router = require('./router/globalRouter'); 
app.globalRouter = new Router(app.eventEmitter);

app.globalRouter.setRoutes(routes);
// get express router instance
const routerInstance = app.globalRouter.getRouterInstance();


// Start http server
const port = process.env.NODE_ENV === 'production' ? 80 : 3000;
const server = modulesList.getPublished({name: 'server.mod.js'});

server(port, routerInstance);

