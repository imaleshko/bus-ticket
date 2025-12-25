import styles from "./AccountSidebar.module.css";
import { Link, NavLink } from "react-router";
import { useLogout } from "@/hooks/useLogout.jsx";

const AccountSidebar = () => {
  const active = ({ isActive }) => {
    return `${styles.link} ${isActive ? styles.active : ""}`;
  };
  const { logout } = useLogout();
  return (
    <nav className={styles.sidebar}>
      <NavLink to="/accountinfo" className={active}>
        Мої дані
      </NavLink>
      <NavLink to="/accounttickets" className={active}>
        Мої квитки
      </NavLink>
      <Link to="/" className={styles.link} onClick={logout}>
        Вихід
      </Link>
    </nav>
  );
};

export default AccountSidebar;
