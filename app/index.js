// ------------------------
// Load main system modules
// ------------------------

// ###################
// Load module manager
const Manager = require('./system/modules-manager');
const manager = new Manager();

// Register modules with given subname
const modulesList = manager.registerModules(['.mod.','.config.']);

// ###################
// Load root application object
const registerService = async function(service) {
	const application = await modulesList.then(manager => manager.getModule({name: 'app.mod.js'}));
	return application;
}

console.log(registerService().then(current => console.log(current)));

// ###################
// Load global router
const Router = require('./routes/globalRouter'); 
const globalRouter = new Router();
const routes = globalRouter.getRouter()

// #################
// Start http server
const port = process.env.NODE_ENV === 'production' ? 80 : 3000;
const startServer = async function(port) {
	const server = await modulesList.then(manager => manager.getModule({name: 'server.mod.js'}));
	server.published(port, routes);
};

startServer(port);







