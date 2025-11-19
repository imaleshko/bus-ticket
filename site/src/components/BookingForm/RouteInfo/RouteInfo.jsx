import styles from "./RouteInfo.module.css";
import RouteTimeline from "../RouteTimeline/RouteTimeline.jsx";

const RouteInfo = ({ ticketCount, route }) => {
  const { duration, price } = route;

  const totalPrice = price * ticketCount;

  return (
    <div className={styles.container}>
      <div className={styles.timeline}>
        <RouteTimeline route={route} />
      </div>
      <div className={styles.details}>
        <p>Час в дорозі: {duration}</p>
        <p>Транспорт: Iveco Crossway</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.input}>
          <input
            type="text"
            value={ticketCount}
            readOnly
            className={styles.inputTicket}
          />
          <p className={styles.tickets}>квиток(ів)</p>
        </div>
        <p className={styles.price}>{totalPrice} грн</p>
      </div>
    </div>
  );
};

export default RouteInfo;
