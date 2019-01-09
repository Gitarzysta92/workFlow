// ------------------------
// Load main system modules
// ------------------------

// ###################
// Load module manager
// 
const Manager = require('./system/modules-manager');
const manager = new Manager();
// Register modules with given subname
const modulesType = ['.mod.','.config.','.routes.'];
const modulesList = manager.registerModules(modulesType);


// ###################
// Load root application object
// 
const registerService = async function(service) {
	const application = await modulesList.then(manager => manager.getModule({name: 'app.mod.js'}));
	return application;
}
registerService().then(app => app.property = 'aasd').then(app => console.log(app));


// ###################
// Load and setting Main Controller
// 
const Controller = require('./controller/mainController');
const mainController = new Controller();
const controllerInterface = mainController.run.bind(mainController);


// ###################
// Load and setting Global Router
// 
const Router = require('./routes/globalRouter'); 
const globalRouter = new Router();
// get express router instance
const router = globalRouter.getRouter()

const injectRoutes = async function(router) {
	const routeModules = await modulesList.then(manager => manager.getModules({type: 'routes'}));
	const routes = routeModules.map(current => current.published);
	router.setRoutes(routes);
}
// Connect router with controller
globalRouter.connect(controllerInterface);
// Set all routes
injectRoutes(globalRouter);


// #################
// Start http server
//
const port = process.env.NODE_ENV === 'production' ? 80 : 3000;
const startServer = async function(port) {
	const server = await modulesList.then(manager => manager.getModule({name: 'server.mod.js'}));
	server.published(port, router);
};

startServer(port);







