import styles from "./Search.module.css";

const Search = () => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Звідки" className={styles.input} />
      <div className={styles.divider}></div>
      <input type="text" placeholder="Куди" className={styles.input} />
      <div className={styles.divider}></div>
      <input type="text" placeholder="Коли" className={styles.input} />
      <div className={styles.divider}></div>
      <button type="submit" className={styles.button}>
        Шукати
      </button>
    </form>
  );
};

export default Search;
