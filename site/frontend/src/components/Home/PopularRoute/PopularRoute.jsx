import styles from "./PopularRoute.module.css";
import Button from "../../../ui/Button/Button.jsx";
import StarIcon from "../../../ui/Star/StarIcon.jsx";
import { useNavigate, createSearchParams } from "react-router";
import { useAuth } from "@/context/AuthContext.jsx";

const PopularRoute = ({ id, from, to, frequency }) => {
  const navigate = useNavigate();

  const { isAuth } = useAuth();

  const handleBooking = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const day = String(tomorrow.getDate()).padStart(2, "0");
    const date = `${year}-${month}-${day}`;

    if (isAuth) {
      navigate({
        pathname: "/infoform",
        search: createSearchParams({
          id: id,
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
        <Button onClick={handleBooking}>Переглянути</Button>
      </div>
    </div>
  );
};

export default PopularRoute;
