import { useState, useEffect, lazy, Suspense } from "react";
import {
  useParams,
  NavLink,
  Route,
  useRouteMatch,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { fetchPrimaryInfoAboutFilm, IMAGE_URL } from "../../services/film-api";
import styles from "./SingleFilmView.module.css";
import PendingView from "../LoadingView/LoadingView";

const CastView = lazy(() => import("../CastView/CastView"));
const ReviewView = lazy(() => import("../ReviewView/ReviewView"));

function SingleFilmsView() {
  const { moviesId } = useParams();
  const [film, setFilm] = useState(null);
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const goBack = () => {
    if (location.state?.from) {
      history.push(location.state.from);
      return;
    }
    history.push("/movies");
  };

  useEffect(() => {
    fetchPrimaryInfoAboutFilm(moviesId).then(setFilm);
  }, [moviesId]);

  return (
    <>
      {film && (
        <>
          <div>
            <button className={styles.btn} onClick={goBack}>
              Go Back
            </button>
          </div>
          <div>
            <div className={styles.wrapper}>
              <div className={styles.image__wrapper}>
                <img
                  className={styles.image}
                  src={`${IMAGE_URL}${film.poster_path}`}
                  alt={film.title || film.name}
                />
              </div>
              <div>
                <h3 className={styles.title}>{film.title || film.name}</h3>
                <p className={styles.rating}>Rating: {film.vote_average}</p>
                <h3 className={styles.subtitle}>Overview</h3>
                <p className={styles.descr}>{film.overview}</p>
                <p className={styles.release}>
                  Release date : {film.release_date}
                </p>
                {film.genres && (
                  <>
                    <h3 className={styles.subtitle}>Genres</h3>
                    <ul className={styles.genres}>
                      {film.genres.map((item, index) => (
                        <li key={index} className={styles.item}>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
            <nav>
              <NavLink
                to={`${url}/cast`}
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Cast
              </NavLink>
              <NavLink
                to={`${url}/review`}
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Review
              </NavLink>
            </nav>
            <Suspense fallback={<PendingView />}>
              <Switch>
                <Route path={`${path}:moviesid/cast`}>
                  <CastView moviesId={moviesId} />
                </Route>
                <Route path={`${path}:movieId/review`}>
                  <ReviewView movieId={moviesId} />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </>
      )}
    </>
  );
}

export default SingleFilmsView;