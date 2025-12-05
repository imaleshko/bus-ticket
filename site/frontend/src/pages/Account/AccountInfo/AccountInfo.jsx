import AccountSidebar from "../../../components/Account/AccountSidebar/AccountSidebar.jsx";
import UserInfo from "../../../blocks/Account/UserInfo/UserInfo.jsx";
import styles from "./AccountInfo.module.css";

const AccountInfo = () => {
  return (
    <div className={styles.profilePage}>
      <AccountSidebar activePage="Info" />
      <UserInfo />
    </div>
  );
};

export default AccountInfo;
