import { Link } from "react-router";
import styles from "./Header.module.css";
import logo from "../../assets/header/logo.png";
import user from "../../assets/header/user.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.rightSection}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>
            Головна
          </Link>
          <Link to="/about" className={styles.navLink}>
            Хто ми
          </Link>
        </nav>
        <Link to="/login" className={styles.login}>
          <img src={user} alt="logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
