import EditIcon from "../../../assets/account/img.png";
import styles from "./UserInfo.module.css";
import { useAuth } from "../../../context/AuthContext.jsx";

const UserInfo = () => {
  const { user } = useAuth();
  return (
    <main className={styles.infoContainer}>
      <div className={styles.infoSection}>
        <div className={styles.header}>
          <h2 className={styles.title}>Особисті дані</h2>
          <button className={styles.editButton}>
            <img src={EditIcon} alt="Редагувати" className={styles.editImage} />
            Редагувати
          </button>
        </div>
        <div className={styles.fieldsContainer}>
          <div className={styles.field}>
            <label className={styles.label}>Ім'я</label>
            <div className={styles.value}>{user?.name}</div>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Прізвище</label>
            <div className={styles.value}>{user?.surname}</div>
          </div>
        </div>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.header}>
          <h2 className={styles.title}>Контакти</h2>
          <button className={styles.editButton}>
            <img src={EditIcon} alt="Редагувати" className={styles.editImage} />
            Редагувати
          </button>
        </div>
        <div className={styles.fieldsContainer}>
          <div className={styles.field}>
            <label className={styles.label}>Телефон</label>
            <div className={styles.value}>{user?.phone}</div>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Електронна пошта</label>
            <div className={styles.value}>{user?.email}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserInfo;
