import PropTypes from "prop-types";
import styles from "./ErrorView.module.css";

function ErrorView({ message }) {
  return (
    <div className={styles.box} role="alert">
      <p className={styles.subtitle}>Error : {message}</p>
    </div>
  );
}

ErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorView;