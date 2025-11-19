import styles from "./BookingHeader.module.css";

const BookingHeader = ({ from, to, date }) => {
  return (
    <div className={styles.header}>
      <p className={styles.title}>{from}-{to}</p>
      <p className={styles.date}>{date}</p>
    </div>
  );
};

export default BookingHeader;