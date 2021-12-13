// import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import { getUserIsLoggedIn } from './../redux/auth';

function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  // const isLoggedIn = useSelector(getUserIsLoggedIn);
  // const shouldRedirect = isLoggedIn && restricted;
  return <Route {...routeProps}>{children}</Route>;
}

export default PublicRoute;
