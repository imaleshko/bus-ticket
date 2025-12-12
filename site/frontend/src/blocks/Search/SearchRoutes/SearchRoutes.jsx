import SearchRoute from "../../../components/Search/SearchRoute/SearchRoute.jsx";
import NotFound from "../../../components/NotFound/NotFound.jsx";
import styles from "./SearchRoutes.module.css";
import useRoutes from "@/hooks/useRoutes.jsx";
import Spinner from "@/ui/Spinner/Spinner.jsx";

const SearchRoutes = ({ from, to, date }) => {
  const { routes, isPending } = useRoutes(from, to, date);

  if (isPending) {
    return <Spinner />;
  }

  return (
    <div className={styles.blockContainer}>
      <div className={styles.list}>
        {routes.length > 0 ? (
          routes.map((route) => (
            <SearchRoute key={route.routeId} route={route} date={date} />
          ))
        ) : (
          <NotFound text={"За вашим запитом нічого не знайдено"} />
        )}
      </div>
    </div>
  );
};

export default SearchRoutes;
