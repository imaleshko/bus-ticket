import styles from "./SearchRoute.module.css";
import Button from "@/ui/Button/Button.jsx";
import { createSearchParams, useNavigate } from "react-router";
import { useAuth } from "@/context/AuthContext.jsx";

const SearchRoute = ({ route, date }) => {
  const { routeId, from, to, departureTime, distance, duration, price } = route;
  const time = `${date} ${departureTime}`;

  const navigate = useNavigate();

  const { isAuth } = useAuth();

  const handleClick = () => {
    if (isAuth) {
      navigate({
        pathname: "/infoform",
        search: createSearchParams({
          routeId: routeId,
          date: date,
        }).toString(),
      });
    } else {
      navigate({
        pathname: "/login",
      });
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.row}>
          <div className={styles.routeCell}>
            {from} - {to}
          </div>
          <div className={styles.detailsCell}>
            {distance} кілометрів / {duration} год
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.timeCell}>{time}</div>
          <div className={styles.priceCell}>{price} грн</div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={handleClick}>Забронювати</Button>
      </div>
    </div>
  );
};

export default SearchRoute;
