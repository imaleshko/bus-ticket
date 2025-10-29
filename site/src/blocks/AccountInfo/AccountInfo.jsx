import Sidebar from "../../components/SidebarAccount/SidebarAccount.jsx";
import UserInfo from "../../components/UserInfo/UserInfo.jsx";
import styles from "./AccountInfo.module.css";

const AccountInfo = () => {
  return (
    <div className={styles.profilePage}>
      <Sidebar activePage="Info" />
      <UserInfo />
    </div>
  );
};

export default AccountInfo;
