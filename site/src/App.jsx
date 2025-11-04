import { Routes, Route } from "react-router";
import Layout from "./layouts/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import SearchPage from "./pages/SearchPage/SearchPage.jsx";
import About from "./pages/About/About.jsx";
import Login from "./pages/Login/Login.jsx";
import Registration from "./pages/Registration/Registration.jsx";
import AccountInfo from "./pages/Account/AccountInfo/AccountInfo.jsx";
import AccountTickets from "./pages/Account/AccountTickets/AccountTickets.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="accountinfo" element={<AccountInfo />} />
        <Route path="accounttickets" element={<AccountTickets />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
