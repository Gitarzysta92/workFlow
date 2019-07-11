import DataProvider from '../library/externalDataProvider';

import { apiConfig } from 'Constants';
import { userAPI } from 'Constants';



// Api caller setup

const { API_URL, API_KEY } = apiConfig;
const apiRequestHeaders = {
  'Content-Type': 'application/json',
  'appkey': API_KEY
}

const dataProvider = DataProvider.init({
  headers: apiRequestHeaders,
  url: API_URL
});


dataProvider.createCaller('user-authentication', {
  endpoint: userAPI.AUTHENTICATION.endpoint,
  method: userAPI.AUTHENTICATION.type
});

dataProvider.createCaller('user-registration', {
  endpoint: userAPI.REGISTRATION.endpoint,
  method: userAPI.REGISTRATION.type
});

dataProvider.createCaller('get-current-user-data', {
  endpoint: userAPI.GET_CURRENT_USER.endpoint,
  method: userAPI.GET_CURRENT_USER.type
},{
  cache: 10000
});

const apiCaller = dataProvider.getCaller;

//app.sessionToken.subscribe(dataProvider.setHeaderProperty);
export { apiCaller , dataProvider }