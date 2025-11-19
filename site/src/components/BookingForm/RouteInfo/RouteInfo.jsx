import styles from "./RouteInfo.module.css"
import RouteTimeline from "../RouteTimeline/RouteTimeline.jsx";
import { useState } from "react";

const RouteInfo = ({ ticketCount }) => {
  const price = 700;

  const totalPrice = price * ticketCount;

  return (
    <div className={styles.container}>
      <div className={styles.timeline}>
        <RouteTimeline />
      </div>
      <div className={styles.details}>
        <p>Час в дорозі: 4.30</p>
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
  )
}

export default RouteInfo;