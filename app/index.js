// ------------------------
// Load main system modules
// ------------------------

// ###################
// Load module manager
// 
const Manager = require('./system/modules-manager');
const manager = new Manager();
// Register modules with given subname
const modulesType = ['.mod.','.config.','.routes.', '.mongo.', '.controller.'];
const modulesList = manager.registerModules(modulesType);


// ###################
// Load root application object
// 
const registerService = async function(service) {
	const application = await modulesList.then(manager => manager.getModule({name: 'app.mod.js'}));
	return application;
}
//registerService().then(app => app.property = 'aasd').then(app => console.log(app));


// ###################
// Load and setting Main Controller
// 
const Controller = require('./controller/mainController');
const mainController = new Controller();
const controllerInterface = mainController.prepare.bind(mainController);


// ###################
// Load and setting Main Controller
// 
const Authorizer = require('./system/request-auth');
const auth = new Authorizer();


// ###################
// Get all routes
// 

function flatArray(array, aggregator = []) {
		const aggr = aggregator;
		const toFlat = array;

		toFlat.forEach(current => {
			if (Array.isArray(current)) {
				aggr.concat(flatArray(current, aggr));
			} else {
				aggr.push(current);
			}
		}); 
		return aggr; 
	}


const routesEndpoints = async function() {
	const routeModules = await modulesList.then(manager => manager.getModules({type: 'routes'}));
	return flatArray(routeModules.map(current => current.published));
}


// ###################
// Load and setting Global Router
// 
const Router = require('./router/globalRouter'); 
const globalRouter = new Router();
// get express router instance
const router = globalRouter.getRouter()


// Connect router with controller
globalRouter.connect(controllerInterface);
// Set all routes
routesEndpoints()
	.then(routes => auth.wrap(routes))
	.then(routes => globalRouter.setRoutes(routes));


// #################
// Start http server
//
const port = process.env.NODE_ENV === 'production' ? 80 : 3000;
const startServer = async function(port) {
	const server = await modulesList.then(manager => manager.getModule({name: 'server.mod.js'}));
	server.published(port, router);
};

startServer(port);







