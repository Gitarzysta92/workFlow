import { apiCaller } from 'InternalApi';


export const user = { 
	getUserData
}



function getUserData() {
	return apiCaller('get-current-user-data')
		.then(user => user)
}