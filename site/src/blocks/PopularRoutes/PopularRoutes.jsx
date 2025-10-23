import styles from "./PopularRoutes.module.css";
import PopularRouteCard from "../../components/PopularRouteCard/PopularRouteCard.jsx";

const PopularRoutes = () => {
  return (
    <div className={styles.popular}>
      <h3 className={styles.title}>Популярне</h3>
      <div className={styles.list}>
        <PopularRouteCard from="Ужгород" to="Львів" frequency="Щодня" />
        <PopularRouteCard from="Ужгород" to="Київ" frequency="Щодня" />
        <PopularRouteCard from="Ужгород" to="Одеса" frequency="Щодня" />
      </div>
    </div>
  );
};

export default PopularRoutes;
