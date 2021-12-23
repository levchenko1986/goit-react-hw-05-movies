import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FilmsView.module.css";

function FilmsView({ films }) {
  const { url } = useRouteMatch();

  return (
    <ul className={styles.list}>
      {films.map((film) => (
        <li key={film.id} className={styles.item}>
          <Link to={`${url}/${film.id}`} className={styles.link}>
            <p className={styles.title}>{film.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

FilmsView.propTypes = {
  images: PropTypes.array,
};

export default FilmsView;