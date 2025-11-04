import SearchRouteCard from "../../components/SearchRouteCard/SearchRouteCard.jsx";
import styles from "./SearchRoutes.module.css";
import test_data from "../../mock/search_routes.js";
import RouteNotFound from "../../components/RoutesNotFound/RoutesNotFound.jsx";

const SearchRoutes = ({ from, to, date}) => {
  const suitableRoutes = [];
  for (const route of test_data) {
    const sameFrom = route.from.toLowerCase() === from.toLowerCase();
    const sameTo = route.to.toLowerCase() === to.toLowerCase();
    if (sameFrom && sameTo) {
      suitableRoutes.push(route)
    }
  }
  return (
    <div className={styles.blockContainer}>
      <div className={styles.list}>
        {suitableRoutes.length > 0 ? (
          suitableRoutes.map((route) => (
            <SearchRouteCard
              key={route.id}
              from={route.from}
              to={route.to}
              time={`${date} ${route.departureTime}`}
              distance={route.distance}
              duration={route.duration}
              price={route.price}
            />
          ))
        ) : (
          <RouteNotFound text={"За вашим запитом нічого не знайдено"}/>
          )}
      </div>
    </div>
  );
};

export default SearchRoutes;
