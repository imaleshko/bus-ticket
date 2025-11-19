import styles from "./RouteTimeline.module.css"
const RouteTimeline = () => {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.item}>
        <div className={styles.time}>12.30</div>
        <div className={styles.timeline}>
          <div className={styles.dot}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.city}>Ужгород</div>
          <div className={styles.address}>вул. ... №3</div>
        </div>
      </div>
      <div className={`${styles.item} ${styles.secondItem}`}>
        <div className={styles.time}>17.00</div>
        <div className={styles.timeline}>
          <div className={styles.dot}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.city}>Львів</div>
          <div className={styles.address}>вул. ... №3</div>
        </div>
      </div>
    </div>
  );
};

export default RouteTimeline;