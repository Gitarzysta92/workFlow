import io from 'socket.io-client';


const host = 'http://localhost:8080';


class WebSocketClient {

}


class Socket {
	constructor({namespace}) {
		this.socket = io(host + namespace, {
			transportOptions: {
				polling: {
					extraHeaders: {
						'appkey' : 'rootkey'
					}
				}
			}
		});

		console.log(host + namespace);
	}

	emit() {

	}
}

// 1. Get all loggedin user data by restApi
// 2. Emit Online status to other users
// 3. 

console.log('wtf');


const chat = new Socket({
	namespace: '/chatRoom',
	userId: '123123'
});

//chat.socket.on('connection', function() {
//	chat.socket.send('hi');
//});
//setInterval(function() {
//	chat.socket.emit('action', 'action');
//},100);


	

export { WebSocket }