import styles from "./Header.module.css";
import logo from "../../assets/headerImg/logo.png";
import user from "../../assets/headerImg/user.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </a>
      <div className={styles.rightSection}>
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>
            Головна
          </a>
          <a href="/about" className={styles.navLink}>
            Хто ми
          </a>
        </nav>
        <a href="/" className={styles.login}>
          <img src={user} alt="logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;
