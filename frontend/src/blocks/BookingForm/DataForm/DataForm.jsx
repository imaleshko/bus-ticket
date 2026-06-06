import styles from "./DataForm.module.css";
import BookingHeader from "@/components/BookingForm/BookingHeader/BookingHeader.jsx";
import RouteTimeline from "@/components/BookingForm/RouteTimeline/RouteTimeline.jsx";
import Button from "@/ui/Button/Button.jsx";
import { useNavigate, useSearchParams } from "react-router";
import NotFound from "@/components/NotFound/NotFound.jsx";
import { useAuth } from "@/context/AuthContext.jsx";
import { useEffect, useState } from "react";
import { useBooking } from "@/hooks/useBooking.jsx";
import useRoute from "@/hooks/useRoute.jsx";
import Spinner from "@/ui/Spinner/Spinner.jsx";

const DataForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const routeId = searchParams.get("routeId");
  const date = searchParams.get("date");
  const seat = Number(searchParams.get("seat"));

  const { route, isPending } = useRoute(routeId, date);

  const { createBooking, isError, error } = useBooking();

  const { user } = useAuth();

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const bookingData = {
      routeId: route.routeId,
      date: date,
      seat: seat,
      email: data.email,
    };

    createBooking(bookingData, {
      onSuccess: () => {
        navigate("/success");
      },
    });
  };

  if (isPending) {
    return <Spinner />;
  }

  if (!route) {
    return (
      <div className={styles.dataForm}>
        <NotFound text="Маршрут не знайдено" />
      </div>
    );
  }

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
          <div className={styles.price}>{route.price} грн</div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.button}>
          <Button onClick={handleSubmit}>До оплати</Button>
        </div>
      </div>
    </div>
  );
};

export default DataForm;
