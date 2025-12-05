import styles from "./PopularRoutes.module.css";
import PopularRoute from "../../../components/Home/PopularRoute/PopularRoute.jsx";

const PopularRoutes = () => {
  return (
    <div className={styles.popular}>
      <h3 className={styles.title}>Популярне</h3>
      <div className={styles.list}>
        <PopularRoute id="r1" from="Ужгород" to="Львів" frequency="08.00, щодня" />
        <PopularRoute id="r6" from="Ужгород" to="Львів" frequency="18.00, щодня" />
        <PopularRoute id="r7" from="Ужгород" to="Київ" frequency="08.00, щодня" />
      </div>
    </div>
  );
};

export default PopularRoutes;
