import SearchRoute from "../../../components/Search/SearchRoute/SearchRoute.jsx";
import NotFound from "../../../components/NotFound/NotFound.jsx";
import styles from "./SearchRoutes.module.css";
import test_data from "../../../mock/search_routes.js";

const SearchRoutes = ({ from, to, date }) => {
  const suitableRoutes = [];
  for (const route of test_data) {
    const sameFrom = route.from.toLowerCase() === from.toLowerCase();
    const sameTo = route.to.toLowerCase() === to.toLowerCase();
    if (sameFrom && sameTo) {
      suitableRoutes.push(route);
    }
  }

  return (
    <div className={styles.blockContainer}>
      <div className={styles.list}>
        {suitableRoutes.length > 0 ? (
          suitableRoutes.map((route) => (
            <SearchRoute key={route.id} route={route} date={date} />
          ))
        ) : (
          <NotFound text={"За вашим запитом нічого не знайдено"} />
        )}
      </div>
    </div>
  );
};

export default SearchRoutes;
