import Sidebar from "../../../components/AccountSidebar/AccountSidebar.jsx";
import UserInfo from "../../../blocks/Account/UserInfo/UserInfo.jsx";
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
