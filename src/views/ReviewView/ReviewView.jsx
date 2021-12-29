import { useState, useEffect } from 'react';
import { fetchReviewsForFilm } from '../../services/film-api';
import styles from './ReviewView.module.css';
import PropTypes from "prop-types";

function ReviewView({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviewsForFilm(movieId)
    .then(request => setReviews(request.results))
    .catch((error) => {
      console.log(error);
    });
  }, [movieId]);

  return (
    <div className={styles.wrapper}>
      {reviews.length > 0 ? (
        <>
          <ul className={styles.list}>
            {reviews.map((item, index) => (
              <li key={index} className={styles.item}>
                <h3 className={styles.title}> {item.author}</h3>
                    <p className={styles.descr}> {item.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h3 className={styles.text}>No reviews to show</h3>
      )}
    </div>
  );
}

ReviewView.propTypes = {
  movieId: PropTypes.string.isRequired
};

export default ReviewView;