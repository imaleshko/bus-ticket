import styles from "./DataForm.module.css";
import BookingHeader from "@/components/BookingForm/BookingHeader/BookingHeader.jsx";
import RouteTimeline from "@/components/BookingForm/RouteTimeline/RouteTimeline.jsx";
import Button from "@/ui/Button/Button.jsx";
import { useNavigate, useSearchParams } from "react-router";
import NotFound from "@/components/NotFound/NotFound.jsx";
import { useAuth } from "@/context/AuthContext.jsx";
import { useEffect, useState } from "react";
import { useBooking } from "@/hooks/useBooking.jsx";
import axios from "axios";

const DataForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");
  const date = searchParams.get("date");
  const count = Number(searchParams.get("count"));
  const seats = searchParams.get("seats")
    ? searchParams.get("seats").split(",").map(Number)
    : [];

  const [route, setRoute] = useState(null);

  const { createBooking, isError, error } = useBooking();

  const { user, loginContext } = useAuth();

  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (user) {
      setData({
        name: user.name,
        surname: user.surname,
        email: user.email,
        phone: user.phone,
      });
    }
  }, [user]);

  useEffect(() => {
    if (!id || !date) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/routes/${id}`,
          {
            params: { date: date },
          },
        );
        setRoute(response.data);
        console.log(route);
      } catch (error) {
        console.error(error);
      }
    };
    void fetchData();
  }, [id, date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const bookingData = {
      routeId: route.id,
      date: date,
      seats: seats,
      price: route.price * count,
      email: data.email,
    };

    createBooking(bookingData, {
      onSuccess: (newTicket) => {
        const updatedUser = {
          ...user,
          tickets: [...(user.tickets || []), newTicket],
        };
        loginContext({ user: updatedUser });
        navigate("/success");
      },
    });
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
      {isError && <div className={styles.error}>{error.message}</div>}
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
        <div className={styles.button} onClick={handleSubmit}>
          <Button>До оплати</Button>
        </div>
      </div>
    </div>
  );
};

export default DataForm;
