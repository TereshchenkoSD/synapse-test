import { Redirect, Switch } from 'react-router-dom';
import { Suspense, useState, useContext } from 'react';
import AppContainer from './components/AppContainer';
import AppBar from './components/AppBar';

import Loader from './components/Loader';

import PrivateRoute from './components/PrivateRout';

import PublicRoute from './components/PublicRoute';

import HomePage from './views/HomePage';
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';

import context from './context/authContext';

const App = () => {
  const { currentUser } = useContext(context);
  // const [currentUser, setCurrentUser] = useState(null);

  // const getCurrentUser = user => {
  //   setCurrentUser(user);
  // };

  return (
    <>
      <AppBar />
      <AppContainer>
        <Switch>
          <Suspense fallback={<Loader />}>
            <PublicRoute exact path="/">
              {currentUser && <Redirect to="/" />}
              <HomePage />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <RegisterPage />
            </PublicRoute>
            <PublicRoute path="/login" restricted>
              <LoginPage />
            </PublicRoute>
          </Suspense>
        </Switch>
      </AppContainer>
    </>
  );
};

export default App;
