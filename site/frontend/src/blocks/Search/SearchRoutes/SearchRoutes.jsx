import SearchRoute from "../../../components/Search/SearchRoute/SearchRoute.jsx";
import NotFound from "../../../components/NotFound/NotFound.jsx";
import styles from "./SearchRoutes.module.css";
import useRoutes from "@/hooks/useRoutes.jsx";
const SearchRoutes = ({ from, to, date }) => {
  const routes = useRoutes(from, to);

  return (
    <div className={styles.blockContainer}>
      <div className={styles.list}>
        {routes.length > 0 ? (
          routes.map((route) => (
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
