import styles from "./DataForm.module.css";
import BookingHeader from "../../../components/BookingForm/BookingHeader/BookingHeader.jsx";
import RouteTimeline from "../../../components/BookingForm/RouteTimeline/RouteTimeline.jsx";
import Button from "../../../ui/Button/Button.jsx";
import { useNavigate, useSearchParams } from "react-router";
import test_data from "../../../mock/search_routes.js";
import NotFound from "../../../components/NotFound/NotFound.jsx";
import { useAuth } from "../../../context/AuthContext.jsx";
import { useEffect, useState } from "react";

const DataForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const date = searchParams.get("date");
  const count = searchParams.get("count");
  const seats = searchParams.get("seats").split(",");

  const route = test_data.find((item) => item.id === id);

  const { user } = useAuth();

  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setData({
      name: user.name,
      surname: user.surname,
      email: user.email,
      phone: user.phone,
    });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const newTicket = {
      id: Math.random() * 100,
      routeId: route.id,
      userId: user?.email,
      date: date,
      seats: seats,
      price: route.price * count,
    };

    const existingTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const updatedTickets = [...existingTickets, newTicket];
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));

    navigate("/success");
  };

  if (!route) {
    return (
      <div className={styles.dataForm}>
        <NotFound text="Маршрут не знайдено" />
      </div>
    );
  }

  const totalPrice = route.price * count;
  const { from, to } = route;

  return (
    <div className={styles.dataForm}>
      <BookingHeader from={from} to={to} date={date} />
      <div className={styles.content}>
        <div className={styles.table}>
          <input
            type="text"
            name="name"
            placeholder="Ім'я"
            className={styles.input}
            value={data.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="surname"
            placeholder="Прізвище"
            className={styles.input}
            value={data.surname}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            value={data.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            className={styles.input}
            value={data.phone}
            onChange={handleChange}
          />
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.timelineWrapper}>
            <RouteTimeline route={route} />
          </div>
          <div className={styles.ticketCount}>{count} квиток(ів)</div>
          <div className={styles.price}>{totalPrice} грн</div>
        </div>
      </div>
      <div className={styles.footer}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" className={styles.checkbox} />
          <span className={styles.checkboxText}>
            Я погоджуюсь з умовами користування
          </span>
        </label>
        <div className={styles.button} onClick={handleSubmit}>
          <Button>До оплати</Button>
        </div>
      </div>
    </div>
  );
};

export default DataForm;
