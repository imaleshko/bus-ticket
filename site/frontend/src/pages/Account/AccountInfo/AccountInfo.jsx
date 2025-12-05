import AccountSidebar from "../../../components/Account/AccountSidebar/AccountSidebar.jsx";
import UserInfo from "../../../blocks/Account/UserInfo/UserInfo.jsx";
import styles from "./AccountInfo.module.css";
import { useAuth } from "@/context/AuthContext.jsx";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const AccountInfo = () => {
  return (
    <div className={styles.profilePage}>
      <AccountSidebar activePage="Info" />
      <UserInfo />
    </div>
  );
};

export default AccountInfo;
