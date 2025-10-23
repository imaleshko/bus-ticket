import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  return (
    <div className={styles.regFormContainer}>
      <form className={styles.regForm}>
        <h2 className={styles.formTitle}>Реєстрація</h2>
        <input type="text" placeholder="Ім'я" className={styles.formInput} />
        <input type="email" placeholder="Email" className={styles.formInput} />
        <input
          type="password"
          placeholder="Пароль"
          className={styles.formInput}
        />
        <input
          type="password"
          placeholder="Повторіть пароль"
          className={styles.formInput}
        />
        <div className={styles.termsContainer}>
          <label className={styles.termsLabel}>
            <input type="checkbox" />Я погоджуюсь з умовами користування
          </label>
        </div>
        <button type="submit" className={styles.submitButton}>
          Зареєструватися
        </button>
        <div className={styles.loginLink}>
          <p>Вже маєте акаунт?</p>
          <a href="#">Авторизація</a>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
