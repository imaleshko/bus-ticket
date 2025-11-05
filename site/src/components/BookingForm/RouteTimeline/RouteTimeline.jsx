import styles from "./RouteTimeline.module.css";
const RouteTimeline = ({ route }) => {
  const { from, to, departureTime, arrivalTime } = route;
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.item}>
        <div className={styles.time}>{departureTime}</div>
        <div className={styles.timeline}>
          <div className={styles.dot}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.city}>{from}</div>
          <div className={styles.address}>вул. ... №3</div>
        </div>
      </div>
      <div className={`${styles.item} ${styles.secondItem}`}>
        <div className={styles.time}>{arrivalTime}</div>
        <div className={styles.timeline}>
          <div className={styles.dot}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.city}>{to}</div>
          <div className={styles.address}>вул. ... №3</div>
        </div>
      </div>
    </div>
  );
};

export default RouteTimeline;
