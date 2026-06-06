import styles from "./Feedback.module.css";
import StarIcon from "@/ui/Star/StarIcon.jsx";

const Feedback = () => {
  return (
    <div className={styles.feedback}>
      <div className={styles.stars}>
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      <div className={styles.text}>
        <p className={styles.title}>Залишайте та переглядайте відгуки</p>
        <p className={styles.subtitle}>Допоможіть зробити наш сервіс кращим</p>
      </div>
    </div>
  );
};

export default Feedback;
