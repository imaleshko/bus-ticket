import styles from "./PopularRoutes.module.css";
import PopularRoute from "../../../components/Home/PopularRoute/PopularRoute.jsx";

const PopularRoutes = () => {
  return (
    <div className={styles.popular}>
      <h3 className={styles.title}>Популярне</h3>
      <div className={styles.list}>
        <PopularRoute from="Ужгород" to="Львів" frequency="Щодня" />
        <PopularRoute from="Ужгород" to="Київ" frequency="Щодня" />
        <PopularRoute from="Ужгород" to="Одеса" frequency="Щодня" />
      </div>
    </div>
  );
};

export default PopularRoutes;
