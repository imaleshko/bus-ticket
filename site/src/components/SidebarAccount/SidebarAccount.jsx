import styles from "./SidebarAccount.module.css";

const SidebarAccount = ({ activePage }) => {
  return (
    <nav className={styles.sidebar}>
      <a
        href="#"
        className={`${styles.link} ${activePage === "Info" ? styles.active : ""}`}
      >
        Мої дані
      </a>
      <a
        href="#"
        className={`${styles.link} ${activePage === "Tickets" ? styles.active : ""}`}
      >
        Мої квитки
      </a>
      <a href="#" className={styles.link}>
        Вихід
      </a>
    </nav>
  );
};

export default SidebarAccount;
