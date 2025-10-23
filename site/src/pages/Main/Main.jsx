import Header from "../../layouts/Header/Header.jsx";
import Slogan from "../../blocks/Slogan/Slogan.jsx";
import SearchForm from "../../blocks/SearchForm/SearchForm.jsx";
import PopularRoutes from "../../blocks/PopularRoutes/PopularRoutes.jsx";
import Advantages from "../../blocks/Advantages/Advantages.jsx";
import FeedbackSection from "../../blocks/FeedbackSection/FeedbackSectoin.jsx";
import Footer from "../../layouts/Footer/Footer.jsx";

const Main = () => {
  return (
    <div>
      <Header />
      <Slogan />
      <SearchForm />
      <PopularRoutes />
      <Advantages />
      <FeedbackSection />
      <Footer />
    </div>
  );
};

export default Main;
