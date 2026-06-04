import { Outlet, useLocation } from "react-router";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { useEffect } from "react";

const Layout = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
