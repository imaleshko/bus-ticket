import AccountSidebar from "@/components/Account/AccountSidebar/AccountSidebar.jsx";
import AccountTicket from "@/components/Account/AccountTicket/AccountTicket.jsx";
import styles from "./AccountTickets.module.css";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext.jsx";
import axios from "axios";

const AccountTickets = () => {
  const [tickets, setTickets] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user || !user.email) {
      return;
    }

    const fetchTickets = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/booking/userticket", {
          params: { email: user.email },
        });
        setTickets(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTickets();
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
