import { Route, Redirect } from 'react-router-dom';

import { onLocalStorageRead } from '../utils/localStorageFunction';

function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isUser = onLocalStorageRead('loggedUser');
  const shouldRedirect = isUser && restricted;
  console.log(isUser, shouldRedirect);
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}

export default PublicRoute;
