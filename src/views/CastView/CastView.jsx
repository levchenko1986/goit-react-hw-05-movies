import { useState, useEffect } from "react";
import { fetchCastForFilm, IMAGE_URL } from "../../services/film-api";
import photo from "../../images/1852.jpg";
import styles from "./CastView.module.css";

function CastView({ moviesId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCastForFilm(moviesId).then((request) => setCast(request.cast));
  }, [moviesId]);

  return (
    <ul className={styles.list}>
      {cast.map((member) => (
        <li key={member.id} className={styles.item}>
          <img
            src={
              member.profile_path ? `${IMAGE_URL}${member.profile_path}` : photo
            }
            alt={member.name}
            width="100"
            height="150"
          />
          <p className={styles.name}>{member.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default CastView;