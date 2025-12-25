import styles from "./SeatChoise.module.css";

const SeatChoose = ({
  selectedSeats,
  handleSeatClick,
  totalSeats,
  bookingSeats = [],
}) => {
  const seatsList = Array.from({ length: totalSeats }, (_, i) => i + 1);

  return (
    <div className={styles.container}>
      <div className={styles.busBody}>
        <div className={styles.driverRow}>
          <div className={styles.driveSeat}></div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.seats}>
          {seatsList.map((seat) => {
            const isBooked = bookingSeats.includes(seat);
            const isSelected = selectedSeats.includes(seat);

            let seatClass;
            if (isBooked) {
              seatClass = `${styles.seat} ${styles.booked}`;
            } else if (isSelected) {
              seatClass = `${styles.seat} ${styles.selected}`;
            } else {
              seatClass = `${styles.seat} ${styles.available}`;
            }

            return (
              <button
                key={seat}
                className={seatClass}
                onClick={() => handleSeatClick(seat)}
                disabled={isBooked}
              >
                {seat}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SeatChoose;
