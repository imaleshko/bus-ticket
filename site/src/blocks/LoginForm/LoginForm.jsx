import styles from "./LoginForm.module.css";

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
        <button type="submit" className={styles.submitButton}>
          Увійти
        </button>
        <div className={styles.signupLink}>
          <p>Не маєте акаунту?</p>
          <a href="#">Реєстрація</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
