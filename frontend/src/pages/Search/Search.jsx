import { useLocation } from "react-router";
import SearchForm from "../../components/Reusable/SearchForm/SearchForm.jsx";
import SearchRoutes from "../../blocks/Search/SearchRoutes/SearchRoutes.jsx";

const Search = () => {
  const location = useLocation();
  const parameters = new URLSearchParams(location.search);
  const from = parameters.get("from") || "";
  const to = parameters.get("to") || "";
  const date = parameters.get("date") || "";
  return (
    <div>
      <SearchForm initialFrom={from} initialTo={to} initialDate={date} />
      <SearchRoutes from={from} to={to} date={date} />
    </div>
  );
};

export default Search;
