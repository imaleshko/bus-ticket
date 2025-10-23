import SearchRouteCard from "../../components/SearchRouteCard/SearchRouteCard.jsx";
import styles from "./SearchRoutes.module.css";

const test_data = [
  {
    id: "r1",
    from: "Ужгород",
    to: "Львів",
    departureTime: "08:00",
    distance: "280",
    duration: "4",
    price: "700",
  },
  {
    id: "r2",
    from: "Ужгород",
    to: "Львів",
    departureTime: "10:00",
    distance: "280",
    duration: "4",
    price: "700",
  },
  {
    id: "r3",
    from: "Ужгород",
    to: "Львів",
    departureTime: "12:00",
    distance: "280",
    duration: "4",
    price: "700",
  },
  {
    id: "r4",
    from: "Ужгород",
    to: "Львів",
    departureTime: "14:00",
    distance: "280",
    duration: "4",
    price: "700",
  },
  {
    id: "r5",
    from: "Ужгород",
    to: "Львів",
    departureTime: "16:00",
    distance: "280",
    duration: "4",
    price: "700",
  },
  {
    id: "r6",
    from: "Ужгород",
    to: "Львів",
    departureTime: "18:00",
    distance: "280",
    duration: "4",
    price: "700",
  },
];

const SearchRoutes = () => {
  return (
    <div className={styles.blockContainer}>
      <div className={styles.list}>
        {test_data.map((route) => (
          <SearchRouteCard
            key={route.id}
            from={route.from}
            to={route.to}
            departureTime={route.departureTime}
            distance={route.distance}
            duration={route.duration}
            price={route.price}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchRoutes;
