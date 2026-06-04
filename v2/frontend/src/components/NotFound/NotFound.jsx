import styles from "./NotFound.module.css";
import icon from "../../assets/notfound/vectorstock_37964451.png";

const NotFound = ({ text }) => {
  return (
    <div className={styles.container}>
      <img src={icon} alt="Іконка лупи" className={styles.icon} />
      <h2 className={styles.notFoundText}>{text}</h2>
    </div>
  );
};

export default NotFound;
