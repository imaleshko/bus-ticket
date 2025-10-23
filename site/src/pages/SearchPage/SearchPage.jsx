import Header from "../../layouts/Header/Header.jsx";
import Footer from "../../layouts/Footer/Footer.jsx";
import SearchForm from "../../blocks/SearchForm/SearchForm.jsx";
import SearchRoutes from "../../blocks/SearchRoutes/SearchRoutes.jsx";

const SearchPage = () => {
  return (
    <div>
      <Header />
      <SearchForm />
      <SearchRoutes />
      <Footer />
    </div>
  );
};

export default SearchPage;
