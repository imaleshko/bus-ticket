import { Outlet } from "react-router";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
