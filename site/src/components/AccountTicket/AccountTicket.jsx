import styles from "./AccountTicket.module.css";
import Button from "../../ui/Button/Button.jsx";

const AccountTicket = ({ from, to, date }) => {
  return (
    <div className={styles.card}>
      <div>
        <p className={styles.route}>
          {from} - {to}
        </p>
        <p className={styles.date}>{date}</p>
      </div>
      <Button>Переглянути</Button>
    </div>
  );
};

export default AccountTicket;
