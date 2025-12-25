import styles from "./Advantage.module.css";

const Advantage = ({ img, text }) => {
  return (
    <div className={styles.item}>
      <img src={img} alt="text" className={styles.icon} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Advantage;
