import AccountSidebar from "@/components/Account/AccountSidebar/AccountSidebar.jsx";
import AccountTicket from "@/components/Account/AccountTicket/AccountTicket.jsx";
import styles from "./AccountTickets.module.css";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext.jsx";

const AccountTickets = () => {
  const [tickets, setTickets] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user && user.tickets) {
      setTickets(user.tickets);
    }
  }, [user]);

  return (
    <div className={styles.pageContainer}>
      <AccountSidebar activePage="Tickets" />
      <div className={styles.contentArea}>
        {tickets.length === 0 ? (
          <p className={styles.empty}>У вас поки немає придбаних квитків.</p>
        ) : (
          tickets.map((ticket) => (
            <AccountTicket
              key={ticket.id}
              from={ticket.from}
              to={ticket.to}
              date={ticket.date}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AccountTickets;
