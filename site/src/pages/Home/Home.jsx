import Slogan from "../../blocks/Slogan/Slogan.jsx";
import Search from "../../components/Search/Search.jsx";
import PopularRoutes from "../../blocks/PopularRoutes/PopularRoutes.jsx";
import Advantages from "../../blocks/Advantages/Advantages.jsx";
import FeedbackSection from "../../blocks/FeedbackSection/FeedbackSectoin.jsx";

const Home = () => {
  return (
    <div>
      <Slogan />
      <Search />
      <PopularRoutes />
      <Advantages />
      <FeedbackSection />
    </div>
  );
};

export default Home;
