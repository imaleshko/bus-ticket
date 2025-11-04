import { useLocation } from "react-router";
import Search from "../../components/Search/Search.jsx";
import SearchRoutes from "../../blocks/SearchRoutes/SearchRoutes.jsx";

const SearchPage = () => {
  const location = useLocation();
  const parameters = new URLSearchParams(location.search);
  const from = parameters.get("from") || "";
  const to = parameters.get("to") || "";
  const date = parameters.get("date") || "";
  return (
    <div>
      <Search initialFrom={from} initialTo={to} initialDate={date} />
      <SearchRoutes from={from} to={to} date={date} />
    </div>
  );
};

export default SearchPage;
