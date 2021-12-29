import { Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PendingView from "../../views/LoadingView/LoadingView";

const HomeView = lazy(() => import("../../views/HomeView/HomeView"));
const SingleFilmView = lazy(() => import("../../views/SingleFilmView/SingleFilmView"));
const MoviesSearchView = lazy(() => import("../../views/MoviesSearchView/MoviesSearchView"));

const Routes = () => {
  return (
    <Suspense fallback={<PendingView />}>
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/movies/:moviesId">
          <SingleFilmView />
        </Route>
        <Route path="/movies">
          <MoviesSearchView />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
