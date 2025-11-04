import styles from "./SearchRoute.module.css";
import Button from "../../../ui/Button/Button.jsx";

const SearchRoute = ({
  from = "Звідки",
  to = "куди",
  time = "Час виїзду",
  distance = "xx",
  duration = "xx",
  price = "xxx",
}) => {
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
        <Button>Забронювати</Button>
      </div>
    </div>
  );
};

export default SearchRoute;
