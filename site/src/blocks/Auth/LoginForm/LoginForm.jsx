import styles from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useLogin } from "../../../hooks/useLogin.jsx";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const { login, isPending, isSuccess, isError, error } = useLogin();

  const handleChange = (e) =>{
    const { name, value, type } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      email: data.email,
      password: data.password,
    })
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate("/accountinfo");
    }
  }, [isSuccess]);

  return (
    <div className={styles.loginFormContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Авторизація</h2>
        {isError ? (
          <p className={`${styles.errorText} ${styles.serverError}`}>
            {error.message}
          </p>
        ) : null}
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
        <div className={styles.formOptions}>
          <label className={styles.rememberMe}>
            <input type="checkbox" />
            Запам'ятати
          </label>
          <a href="#" className={styles.forgotPassword}>
            Забули пароль?
          </a>
        </div>
        <button type={"submit"} className={styles.submitButton} disabled={isPending}>
          Увійти
        </button>
        <div className={styles.signupLink}>
          <p>Не маєте акаунту?</p>
          <Link to="/registration">Реєстрація</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
