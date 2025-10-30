import styles from "./LoginForm.module.css";
import { Link } from "react-router";

const LoginForm = () => {
  return (
    <div className={styles.loginFormContainer}>
      <form className={styles.loginForm}>
        <h2 className={styles.formTitle}>Авторизація</h2>
        <input type="email" placeholder="Email" className={styles.formInput} />
        <input
          type="password"
          placeholder="Пароль"
          className={styles.formInput}
        />
        <div className={styles.formOptions}>
          <label className={styles.rememberMe}>
            <input type="checkbox" />
            Запам'ятати
          </label>
          <a href="#" className={styles.forgotPassword}>
            Забули пароль?
          </a>
        </div>
        <Link to="/accountinfo" className={styles.submitButton}>
          Увійти
        </Link>
        <div className={styles.signupLink}>
          <p>Не маєте акаунту?</p>
          <Link to="/registration">Реєстрація</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
