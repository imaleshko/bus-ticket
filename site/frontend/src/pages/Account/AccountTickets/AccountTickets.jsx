import AccountSidebar from "@/components/Account/AccountSidebar/AccountSidebar.jsx";
import AccountTicket from "@/components/Account/AccountTicket/AccountTicket.jsx";
import styles from "./AccountTickets.module.css";
import { useAuth } from "@/context/AuthContext.jsx";
import useTickets from "@/hooks/useTickets.jsx";
import Spinner from "@/ui/Spinner/Spinner.jsx";

const AccountTickets = () => {
  const { user } = useAuth();
  const { tickets, isPending } = useTickets(user?.email);

  if (isPending) {
    return <Spinner />;
  }

  return (
    <div className={styles.pageContainer}>
      <AccountSidebar activePage="Tickets" />
      <div className={styles.contentArea}>
        {tickets.length === 0 ? (
          <p className={styles.empty}>У вас поки немає придбаних квитків.</p>
        ) : (
          tickets.map((ticket) => (
            <AccountTicket
              key={ticket._id}
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
