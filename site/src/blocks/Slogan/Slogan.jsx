import styles from "./Slogan.module.css";

const Slogan = () => {
  return (
    <section className={styles.slogan}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Починай свою подорож</h1>
        <h2 className={styles.subtitle}>зараз</h2>
      </div>
    </section>
  );
};

export default Slogan;
