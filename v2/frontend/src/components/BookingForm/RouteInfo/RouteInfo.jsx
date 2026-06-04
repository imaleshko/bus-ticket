import styles from "./RouteInfo.module.css";
import RouteTimeline from "../RouteTimeline/RouteTimeline.jsx";

const RouteInfo = ({ route }) => {
  const { duration, price, transport } = route;

  return (
    <div className={styles.container}>
      <div className={styles.timeline}>
        <RouteTimeline route={route} />
      </div>
      <div className={styles.details}>
        <p>Час в дорозі: {duration}</p>
        <p>Транспорт: {transport}</p>
      </div>
      <div className={styles.footer}>
        <p className={styles.price}>{price} грн</p>
      </div>
    </div>
  );
};

export default RouteInfo;
