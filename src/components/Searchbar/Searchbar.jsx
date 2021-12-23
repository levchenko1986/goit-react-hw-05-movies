import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Searchbar.module.css";

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const onHandleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      return toast.error("Enter another video!");
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={onHandleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={({ target }) => setQuery(target.value)}
          placeholder="Enter movie name here"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
