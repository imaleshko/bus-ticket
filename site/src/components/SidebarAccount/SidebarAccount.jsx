import styles from "./SidebarAccount.module.css";
import { Link, NavLink } from "react-router";

const SidebarAccount = () => {
  const active = ({ isActive }) => {
    return `${styles.link} ${isActive ? styles.active : ""}`;
  };
  return (
    <nav className={styles.sidebar}>
      <NavLink to="/accountinfo" className={active}>
        Мої дані
      </NavLink>
      <NavLink to="/accounttickets" className={active}>
        Мої квитки
      </NavLink>
      <Link to="/" className={styles.link}>
        Вихід
      </Link>
    </nav>
  );
};

export default SidebarAccount;
