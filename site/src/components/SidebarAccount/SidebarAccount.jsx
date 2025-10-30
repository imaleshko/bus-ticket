import styles from "./SidebarAccount.module.css";
import { Link } from "react-router";

const SidebarAccount = ({ activePage }) => {
  return (
    <nav className={styles.sidebar}>
      <Link
        to="/accountinfo"
        className={`${styles.link} ${activePage === "Info" ? styles.active : ""}`}
      >
        Мої дані
      </Link>
      <Link
        to="/accounttickets"
        className={`${styles.link} ${activePage === "Tickets" ? styles.active : ""}`}
      >
        Мої квитки
      </Link>
      <Link to="/" className={styles.link}>
        Вихід
      </Link>
    </nav>
  );
};

export default SidebarAccount;
