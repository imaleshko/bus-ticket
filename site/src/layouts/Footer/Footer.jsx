import styles from "./Footer.module.css";
import Instagram from "../../assets/iconsSoc/Instagram.png";
import TikTok from "../../assets/iconsSoc/TikTok.png";
import Youtube from "../../assets/iconsSoc/Youtube.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftLink}>
        <a href="/" className={styles.link}>
          Головна
        </a>
        <a href="/about" className={styles.link}>
          Хто ми
        </a>
        <a href="/term" className={styles.link}>
          Умови користування
        </a>
      </div>
      <div className={styles.rightLink}>
        <div className={styles.contacts}>
          <a href="tel:+380683427613" className={styles.link}>
            +380683427613
          </a>
          <a href="mailto:comfortbus@gmail.com" className={styles.link}>
            comfortbus@gmail.com
          </a>
        </div>
        <div className={styles.socials}>
          <a href="#">
            <img
              src={Instagram}
              alt="Instagram"
              className={styles.socialIcon}
            />
          </a>
          <a href="#">
            <img src={TikTok} alt="TikTok" className={styles.socialIcon} />
          </a>
          <a href="#">
            <img src={Youtube} alt="YouTube" className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
