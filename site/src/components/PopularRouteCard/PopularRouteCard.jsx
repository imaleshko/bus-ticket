import styles from "./PopularRouteCard.module.css";
import Button from "../../ui/Button/Button.jsx";
import StarIcon from "../../ui/Star/StarIcon.jsx";

const PopularRouteCard = ({ from, to, frequency }) => {
  return (
    <div className={styles.container}>
      <div className={styles.starIcon}>
        <StarIcon />
      </div>
      <div className={styles.card}>
        <div>
          <p className={styles.route}>
            {from} - {to}
          </p>
          <p className={styles.frequency}>{frequency}</p>
        </div>
        <Button>Переглянути</Button>
      </div>
    </div>
  );
};

export default PopularRouteCard;
