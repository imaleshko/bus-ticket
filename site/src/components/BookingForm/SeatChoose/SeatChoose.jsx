import styles from "./SeatChoise.module.css";

const SeatChoose = ({ selectedSeats, handleSeatClick }) => {
  const seatsData = [
    { id: 1, status: "available" },
    { id: 2, status: "available" },
    { id: 3, status: "booked" },
    {
      id: 4,
      status: "booked",
    },
    { id: 5, status: "booked" },
    { id: 6, status: "booked" },
    { id: 7, status: "booked" },
    {
      id: 8,
      status: "available",
    },
    { id: 9, status: "available" },
    { id: 10, status: "available" },
    { id: 11, status: "available" },
    {
      id: 12,
      status: "available",
    },
    { id: 13, status: "available" },
    { id: 14, status: "available" },
    { id: 15, status: "available" },
    {
      id: 16,
      status: "booked",
    },
    { id: 17, status: "booked" },
    { id: 18, status: "booked" },
    { id: 19, status: "booked" },
    {
      id: 20,
      status: "available",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.busBody}>
        <div className={styles.driverRow}>
          <div className={styles.driveSeat}></div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.seats}>
          {seatsData.map((seat) => {
            const isSelected = selectedSeats.includes(seat.id);
            let seatClass;
            if (seat.status === "booked") {
              seatClass = `${styles.seat} ${styles.booked}`;
            } else if (isSelected) {
              seatClass = `${styles.seat} ${styles.selected}`;
            } else {
              seatClass = `${styles.seat} ${styles.available}`;
            }

            return (
              <button
                key={seat.id}
                className={seatClass}
                onClick={() => handleSeatClick(seat.id)}
                disabled={seat.status === "booked"}
              >
                {seat.id}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SeatChoose;
