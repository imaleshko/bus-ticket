import styles from "./RegistrationForm.module.css";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useRegister } from "../../../hooks/useRegister.jsx";

const RegistrationForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const { register, isPending, isSuccess, isError, error } = useRegister();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const findErrors = {};
    if (data.password.length < 8) {
      findErrors.password = "Пароль має бути не менше 8 символів";
    }
    if (data.password !== data.confirmPassword) {
      findErrors.confirmPassword = "Паролі не співпадають";
    }
    if (!data.terms) {
      findErrors.terms = "Ви повинні погодитись з умовами користування";
    }
    setErrors(findErrors);
    if (Object.keys(findErrors).length > 0) {
      return;
    }
    register({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate("/accountinfo");
    }
  }, [isSuccess]);

  return (
    <div className={styles.regFormContainer}>
      <form className={styles.regForm} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Реєстрація</h2>
        {isError && (
          <p className={`${styles.errorText} ${styles.serverError}`}>
            {error.message}
          </p>
        )}
        <input
          type="text"
          placeholder="Ім'я"
          className={styles.formInput}
          name="name"
          value={data.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.formInput}
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          className={styles.formInput}
          name="password"
          value={data.password}
          onChange={handleChange}
          required
        />
        {errors.password ? (
          <p className={styles.errorText}>{errors.password}</p>
        ) : null}
        <input
          type="password"
          placeholder="Повторіть пароль"
          className={styles.formInput}
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={handleChange}
          required
        />
        {errors.confirmPassword ? (
          <p className={styles.errorText}>{errors.confirmPassword}</p>
        ) : null}
        <div className={styles.termsContainer}>
          <label className={styles.termsLabel}>
            <input
              type="checkbox"
              name="terms"
              checked={data.terms}
              onChange={handleChange}
            />
            Я погоджуюсь з умовами користування
          </label>
        </div>
        {errors.terms ? (
          <p className={`${styles.errorText} ${styles.termsError}`}>
            {errors.terms}
          </p>
        ) : null}
        <button
          type={"submit"}
          className={styles.submitButton}
          disabled={isPending}
        >
          Зареєструватися
        </button>
        <div className={styles.loginLink}>
          <p>Вже маєте акаунт?</p>
          <Link to="/login">Авторизація</Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
