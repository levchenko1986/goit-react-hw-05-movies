import { useState, useEffect } from "react";
import { fetchCastForFilm, IMAGE_URL } from "../../services/film-api";
import photo from "../../images/1852.jpg";
import styles from "./CastView.module.css";
import PropTypes from "prop-types";

function CastView({ moviesId }) {
  const [cast, setCast] = useState("");

  useEffect(() => {
    fetchCastForFilm(moviesId)
      .then((request) => {
        setCast(request.cast);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [moviesId]);

  return (
    <>
      {cast.length > 0 ? (
        <ul className={styles.list}>
          {cast.map((member) => (
            <li key={member.id} className={styles.item}>
              <img
                src={
                  member.profile_path
                    ? `${IMAGE_URL}${member.profile_path}`
                    : photo
                }
                alt={member.name}
                width="100"
                height="150"
              />
              <p className={styles.name}>{member.name}</p>
            </li>
          ))}
        </ul>
        ) : (
          <h3 className={styles.text}>No casts to show</h3>
      )}
    </>
  );
}

CastView.propTypes = {
  moviesId: PropTypes.string.isRequired
};

export default CastView;
