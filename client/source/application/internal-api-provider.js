// external
import uuidv4 from 'uuid/v4';

// utils
import { Cookie } from 'Utils';


// constants
import { PATHS as paths } from 'Constants';
import { MOUNTPOINT } from 'Constants';
import { NAVPATHS } from 'Constants';


// lib
import session from '../library/sessionHandler';
import { createView } from '../library/templateCreator';
import ReactiveContainer from '../library/reactiveContainer';


// App
import { SecureRoute, routesAuthorization } from './routes-authorization';
import { apiCaller, dataProvider } from './rest-api-caller';


export { 
  session, 
  createView, 
  apiCaller,
  dataProvider,
  ReactiveContainer,
  SecureRoute,
  routesAuthorization,
  PATHS, 
  NAVPATHS, 
  MOUNTPOINT
}




// Setup constants

// Application paths provider
const PATHS = (function(paths){
  const reducedPaths = {};
  for (let prop in paths) {
    Object.defineProperty(reducedPaths, prop, {
      value: paths[prop].uri,
      writable: false
    });
  }
  return reducedPaths;
})(paths);


// Setup api




// Session handler
export const newSession = function(userToken) {
    const sessionId = uuidv4();
    const sessionName = 'asd';

    return session.init({

    })

    const cookie = new Cookie(sessionName);
    this.session = new Session(userData);
}





