import styles from './InfoForm.module.css';
import BookingHeader from "../../../components/BookingForm/BookingHeader/BookingHeader.jsx";
import RouteInfo from "../../../components/BookingForm/RouteInfo/RouteInfo.jsx";
import SeatChoose from "../../../components/BookingForm/SeatChoose/SeatChoose.jsx";
import Button from "../../../ui/Button/Button.jsx";
import { useState } from "react";

const InfoForm = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (id, status) => {
    if (selectedSeats.includes(id)) {
      setSelectedSeats(selectedSeats.filter(seatId => seatId !== id));
    } else {
      setSelectedSeats([...selectedSeats, id]);
    }
  };

  const ticketCount = selectedSeats.length;

  return (
    <div className={styles.bookingForm}>
      <BookingHeader from="Ужгород" to="Львів" date="12.12.2025"/>
      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <RouteInfo ticketCount={ticketCount} />
        </div>
        <div className={styles.rightColumn}>
          <SeatChoose
            selectedSeats={selectedSeats}
            handleSeatClick={handleSeatClick}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <Button disabled={ticketCount === 0}>Продовжити</Button>
      </div>
    </div>
  )
};

export default InfoForm;