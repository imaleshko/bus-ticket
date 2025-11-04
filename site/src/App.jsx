import { Routes, Route } from "react-router";
import Layout from "./layouts/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Search from "./pages/Search/Search.jsx";
import About from "./pages/About/About.jsx";
import Login from "./pages/Auth/Login/Login.jsx";
import Registration from "./pages/Auth/Registration/Registration.jsx";
import AccountInfo from "./pages/Account/AccountInfo/AccountInfo.jsx";
import AccountTickets from "./pages/Account/AccountTickets/AccountTickets.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="accountinfo" element={<AccountInfo />} />
        <Route path="accounttickets" element={<AccountTickets />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
