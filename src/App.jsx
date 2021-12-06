// import { Redirect, Switch } from 'react-router-dom';
// import { Suspense } from 'react';
import AppContainer from './components/AppContainer';
import NavBar from './components/NavBar';
import Slider from './components/Slider';
// import RegisterForm from './components/Forms/RegisterForm';
import LoginForm from './components/Forms/LoginForm';

import movies from './data/imdb.json';

// import Loader from './components/Loader';

// import PrivateRoute from './components/PrivateRout';

// import PublicRoute from './components/PublicRoute';

const App = () => {
  return (
    <>
      <NavBar />
      <AppContainer>
        {/* <Slider movies={movies} /> */}
        <LoginForm />
        {/* <Suspense fallback={<Loader />}>
      <HomePage />
      <Switch>
        <PublicRoute path="/" exact>
          <Redirect to="/login" />
        </PublicRoute>
        <PublicRoute path="/signup" restricted>
          <RegisterPage />
        </PublicRoute>
        <PublicRoute to="/login" restricted>
          <LoginPage />
        </PublicRoute>
        <PrivateRoute path="/home">
          <HomePage />
        </PrivateRoute>
      </Switch>
    </Suspense> */}
      </AppContainer>
    </>
  );
};

export default App;
