import AccountSidebar from "../../../components/Account/AccountSidebar/AccountSidebar.jsx";
import AccountTicket from "../../../components/Account/AccountTicket/AccountTicket.jsx";
import styles from "./AccountTickets.module.css";

const AccountTickets = () => {
  return (
    <div className={styles.pageContainer}>
      <AccountSidebar activePage="Tickets" />
      <div className={styles.contentArea}>
        <AccountTicket from="Ужгород" to="Львів" date="12.10" />
        <AccountTicket from="Ужгород" to="Київ" date="06.10" />
        <AccountTicket from="Ужгород" to="Одеса" date="06.10" />
        <AccountTicket from="Ужгород" to="Чернігів" date="06.10" />
      </div>
    </div>
  );
};

export default AccountTickets;
