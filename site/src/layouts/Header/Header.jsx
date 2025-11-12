import { Link } from "react-router";
import styles from "./Header.module.css";
import logo from "../../assets/header/logo.png";
import user from "../../assets/header/user.png";
import { useAuth } from "../../context/AuthContext.jsx";

const Header = () => {
  const { isAuth } = useAuth()
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
        <div className={styles.authLinks}>
          {isAuth ? (
            <Link to="/accountinfo" className={styles.login}>
              <img src={user} alt="logo" />
            </Link>
          ) : (
            <>
              <Link to="/login" className={styles.navLink}>
                Вхід
              </Link>
              <Link to="/registration" className={styles.navLink}>
                Реєстрація
              </Link>
            </>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;
