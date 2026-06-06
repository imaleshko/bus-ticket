import Slogan from "../../blocks/Home/Slogan/Slogan.jsx";
import SearchForm from "../../components/Reusable/SearchForm/SearchForm.jsx";
import PopularRoutes from "../../blocks/Home/PopularRoutes/PopularRoutes.jsx";
import Advantages from "../../blocks/Home/Advantages/Advantages.jsx";
import Feedback from "../../blocks/Home/Feedback/Feedback.jsx";

const Home = () => {
  return (
    <div>
      <Slogan />
      <SearchForm />
      <PopularRoutes />
      <Advantages />
      <Feedback />
    </div>
  );
};

export default Home;
