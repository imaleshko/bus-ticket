import styles from "./Search.module.css";
import { Link } from "react-router";

const Search = () => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Звідки" className={styles.input} />
      <div className={styles.divider}></div>
      <input type="text" placeholder="Куди" className={styles.input} />
      <div className={styles.divider}></div>
      <input type="text" placeholder="Коли" className={styles.input} />
      <div className={styles.divider}></div>
      <Link to="/search">
        <button type="button" className={styles.button}>
          Шукати
        </button>
      </Link>
    </form>
  );
};

export default Search;
