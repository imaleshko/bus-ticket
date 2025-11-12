import styles from "./AccountSidebar.module.css";
import { Link, NavLink } from "react-router";
import { useAuth } from "../../../context/AuthContext.jsx";

const AccountSidebar = () => {
  const active = ({ isActive }) => {
    return `${styles.link} ${isActive ? styles.active : ""}`;
  };
  const { logoutContext } = useAuth()
  return (
    <nav className={styles.sidebar}>
      <NavLink to="/accountinfo" className={active}>
        Мої дані
      </NavLink>
      <NavLink to="/accounttickets" className={active}>
        Мої квитки
      </NavLink>
      <Link to="/" className={styles.link} onClick={logoutContext}>
        Вихід
      </Link>
    </nav>
  );
};

export default AccountSidebar;
