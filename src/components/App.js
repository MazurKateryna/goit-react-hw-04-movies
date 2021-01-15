import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from '../views/NotFound';
import Loading from './Loading';
import routes from '../routes';
import Layout from './Layout';

const HomePage = lazy(() =>
  import('../views/HomePage'),
);
const MoviesPage = lazy(() =>
  import('../views/MoviesPage'),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../views/MovieDetailsPage'),
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.moviesDetails} component={MovieDetailsPage} />
            <Route exact path={routes.movies} component={MoviesPage} />
            <Redirect to={routes.home} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;