const methods = require('../controller/userController');




const routes = {
		getUser: {
			method: 'get',
			endpoint: '/user/:name',
			callback: methods.getUser
		},

}

/*
router.get('/:name', function(req, res, next) {
		
});
router.post('/register', function(req, res, next){
	app.registerAction({
		initiator: {
			type: 'http',
			request: req,
			response: res
			},
		context: this,
		permissionNeeded: false,
		execution: route.registerUser
	})	
});
router.post('/authenticate', function(req, res, next) {
	app.registerAction({
		initiator: {
			type: 'http',
			request: req,
			response: res
			},
		context: this,
		permissionNeeded: false,
		execution: route.authenticateUser
	})	
});

//router.post('/login', route.loginUser);

*/

module.exports = routes;


/*
// middleware specific for this router
router.use(function timeLog (req, res, next) {
	console.log('Time', Date.now())
	next();
});*/