import Navigation from "../Navigation/Navigation";
import styles from "./AppBar.module.css";

function AppBar() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}

export default AppBar;