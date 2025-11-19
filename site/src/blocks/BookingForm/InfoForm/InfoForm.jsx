import styles from './InfoForm.module.css';
import BookingHeader from "../../../components/BookingForm/BookingHeader/BookingHeader.jsx";
import RouteInfo from "../../../components/BookingForm/RouteInfo/RouteInfo.jsx";
import SeatChoose from "../../../components/BookingForm/SeatChoose/SeatChoose.jsx";
import Button from "../../../ui/Button/Button.jsx";
import { useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router";
import test_data from "../../../mock/search_routes.js";
import NotFound from "../../../components/NotFound/NotFound.jsx";

const InfoForm = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const date = searchParams.get("date");

  const route = test_data.find((item) => item.id === id);

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (id) => {
    if (selectedSeats.includes(id)) {
      setSelectedSeats(selectedSeats.filter(seatId => seatId !== id));
    } else {
      setSelectedSeats([...selectedSeats, id]);
    }
  };

  const ticketCount = selectedSeats.length;

  const navigate = useNavigate();
  const handleContinue = () => {
    navigate(
      {
        pathname: "/dataform",
        search: createSearchParams({
          id: id,
          date: date,
          count: ticketCount,
          seats: selectedSeats.join(","),
        }).toString(),
      },
    );
  }

  if (!route) {
    return (
      <div className={styles.bookingForm}>
        <NotFound text="Маршрут не знайдено" />
      </div>
    )
  }

  const { from, to } = route;

  return (
      <div className={styles.bookingForm}>
        <BookingHeader from={from} to={to} date={date}/>
        <div className={styles.mainContent}>
          <div className={styles.leftColumn}>
            <RouteInfo ticketCount={ticketCount} route={route}/>
          </div>
          <div className={styles.rightColumn}>
            <SeatChoose
              selectedSeats={selectedSeats}
              handleSeatClick={handleSeatClick}
            />
          </div>
        </div>
        <div className={styles.footer}>
          <Button onClick={handleContinue} disabled={ticketCount === 0}>Продовжити</Button>
        </div>
      </div>
  )
};

export default InfoForm;