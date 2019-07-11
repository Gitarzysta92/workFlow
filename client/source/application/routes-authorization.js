import Authorization from '../library/authorization';

import { SecureRoute as Route } from 'Utils';
import { PATHS as paths } from 'Constants';


// Routes authorization service setup
const routesAuthorization = new Authorization(paths);
const authorize = routesAuthorization.checkPermission

// Secure route
const SecureRoute = function(args) {
  const { path } = args;
  const authResult = authorize(path);
  return Route(args, authResult);
}

export { SecureRoute, routesAuthorization }