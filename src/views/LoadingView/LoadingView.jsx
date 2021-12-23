import React from "react";
import Spinner from "react-loader-spinner";
import styles from "./LoadingView.module.css"

function Loader() {
  return (
    <Spinner
    className={styles.Loader}
      type="Grid"
      color="#3f51b5"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}

export default Loader