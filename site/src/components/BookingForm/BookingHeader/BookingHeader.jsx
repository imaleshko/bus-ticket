import styles from "./BookingHeader.module.css";

const BookingHeader = ({ from, to, date }) => {
  return (
    <div className={styles.header}>
      <p className={styles.title}>Ужгород-Львів</p>
      <p className={styles.date}>12.11.2025</p>
    </div>
  );
};

export default BookingHeader;