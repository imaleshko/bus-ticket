import AccountSidebar from "../../../components/Account/AccountSidebar/AccountSidebar.jsx";
import AccountTicket from "../../../components/Account/AccountTicket/AccountTicket.jsx";
import styles from "./AccountTickets.module.css";
import { useEffect, useState } from "react";
import test_data from "../../../mock/search_routes.js";
import { useAuth } from "../../../context/AuthContext.jsx";

const AccountTickets = () => {
  const [tickets, setTickets] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const saveTickets = JSON.parse(localStorage.getItem("tickets")) || [];
      const myTickets = saveTickets.filter(ticket => ticket.userId === user.email);
      setTickets(myTickets);
    }
  }, [user])

  return (
    <div className={styles.pageContainer}>
      <AccountSidebar activePage="Tickets" />
      <div className={styles.contentArea}>
        {
          tickets.length === 0 ? (
            <p className={styles.empty}>У вас поки немає придбаних квитків.</p>
          ) : (
            tickets.map((ticket) => {
              const routeDetails = test_data.find(route => route.id === ticket.routeId);
              return (
                <AccountTicket
                  key={ticket.id}
                  from={routeDetails.from}
                  to={routeDetails.to}
                  date={ticket.date}
                />
              )
            })

          )
        }
      </div>
    </div>
  );
};

export default AccountTickets;
