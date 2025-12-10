import styles from "./InfoForm.module.css";
import BookingHeader from "@/components/BookingForm/BookingHeader/BookingHeader.jsx";
import RouteInfo from "@/components/BookingForm/RouteInfo/RouteInfo.jsx";
import SeatChoose from "@/components/BookingForm/SeatChoose/SeatChoose.jsx";
import Button from "@/ui/Button/Button.jsx";
import { useEffect, useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router";
import NotFound from "@/components/NotFound/NotFound.jsx";
import axios from "axios";

const InfoForm = () => {
  const [searchParams] = useSearchParams();
  const routeId = searchParams.get("routeId");
  const date = searchParams.get("date");

  const [route, setRoute] = useState(null);

  useEffect(() => {
    if (!routeId || !date) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/routes/${routeId}`,
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
  }, [routeId, date]);

  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatClick = (seat) => {
    if (selectedSeat === seat) {
      setSelectedSeat(null);
    } else {
      setSelectedSeat(seat);
    }
  };

  const navigate = useNavigate();

  const handleContinue = () => {
    if (!selectedSeat) return;
    navigate({
      pathname: "/dataform",
      search: createSearchParams({
        routeId: routeId,
        date: date,
        seat: selectedSeat,
      }).toString(),
    });
  };

  if (!route) {
    return (
      <div className={styles.bookingForm}>
        <NotFound text="Маршрут не знайдено" />
      </div>
    );
  }

  const { from, to } = route;

  return (
    <div className={styles.bookingForm}>
      <BookingHeader from={from} to={to} date={date} />
      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <RouteInfo route={route} />
        </div>
        <div className={styles.rightColumn}>
          <SeatChoose
            selectedSeats={selectedSeat}
            handleSeatClick={handleSeatClick}
            totalSeats={route.totalSeats}
            bookingSeats={route.bookingSeats}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <Button onClick={handleContinue}>
          Продовжити
        </Button>
      </div>
    </div>
  );
};

export default InfoForm;
