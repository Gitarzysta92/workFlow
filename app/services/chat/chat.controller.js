const mod = new Mod(__filename);




const chatSocket = application.webSocket.of('/chatRoom'); 


chatSocket.on('connection', function(socket) {
	console.log('someone connected');
	socket.on('action', function(msg) {
		console.log(msg);
	});
});



const singleChat = {
	chatId: '12312',
	users: ['user.id', 'user.id'],
	messages: [
		{
			user: 'user',
			date: 'new Date',
			message: ''
		}
	]
}


const chatUsers = [
	{
		name: 'asd',
		status: 'asd',
		group: '',
		medaData: {
			id: '1231',

		}
	}
]





/*

io.on('connection', function(socket) {
	console.log('Connected: ' + socket);
	socket.on('addTask', function(data) {
		console.log(data);
		socket.broadcast.emit('addTask', data);
	}),
	socket.on('removeTask', function(data) {
		console.log(data);
		socket.broadcast.emit('removeTask', data);
	})asdasasdasdasdasdasdasd

});as

*/



// Public
mod.publish(async function(mongoCRUD) {
	//const crudApi = await mongoCRUD;
	//sample database request
	//console.log(await crudApi.getSingle({username: 'log'}, 'users'));
});
module.exports = mod;
module.exports.methods = {};
