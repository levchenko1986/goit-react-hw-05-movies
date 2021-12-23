import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { fetchPopularFilmsForToday } from "../../services/film-api";
import ErrorView from "../ErrorView/ErrorView";
import PendingView from "../LoadingView/LoadingView";
import styles from "./HomeView.module.css";

const Status = {
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

function HomeView() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState({});
  const { url } = useRouteMatch();
  const [status, setStatus] = useState(Status.PENDING);

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchPopularFilmsForToday()
      .then((request) => setFilms(request.results))
      .then(setStatus(Status.RESOLVED))
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  if (status === Status.PENDING) {
    return <PendingView />;
  }

  if (status === Status.REJECTED) {
    return <ErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ul className={styles.list}>
          {films.map((film) => (
            <li key={film.id}>
              <Link to={`${url}movies/${film.id}`}>
                <h3 className={styles.subtitle}>{film.title || film.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomeView;