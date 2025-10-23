import styles from "./SearchForm.module.css";
import Search from "../../components/Search/Search.jsx";

const SearchForm = () => {
  return (
    <div className={styles.content}>
      <Search />
    </div>
  );
};

export default SearchForm;
