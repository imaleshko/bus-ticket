import { Routes, Route, Link } from "react-router";
import Layout from "./layouts/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import SearchPage from "./pages/SearchPage/SearchPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import Login from "./pages/Login/Login.jsx";
import Registration from "./pages/Registration/Registration.jsx";
import AccountInfoPage from "./pages/AccountInfoPage/AccountInfoPage.jsx";
import AccountTicketList from "./pages/AccoutnTicketList/AccountTicketList.jsx";

function App() {
  return (
    <Routes>
      шішвм
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="accoutninfo" element={<AccountInfoPage />} />
        <Route path="accouttickets" element={<AccountTicketList />} />
      </Route>
    </Routes>
  );
}

export default App;
