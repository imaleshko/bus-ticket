import styles from "./SearchForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router";

const SearchForm = ({ initialFrom = "", initialTo = "", initialDate = "" }) => {
  const [from, setFrom] = useState(initialFrom);
  const [to, setTo] = useState(initialTo);
  const [date, setDate] = useState(initialDate);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (from) {
      params.append("from", from);
    }
    if (to) {
      params.append("to", to);
    }
    if (date) {
      params.append("date", date);
    }
    const queryPath = params.toString();
    const path = queryPath ? `/search?${queryPath}` : "/search";
    navigate(path);
  };

  return (
    <div className={styles.content}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Звідки"
          className={styles.input}
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <div className={styles.divider}></div>
        <input
          type="text"
          placeholder="Куди"
          className={styles.input}
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <div className={styles.divider}></div>
        <input
          type="date"
          placeholder="Коли"
          className={styles.input}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div className={styles.divider}></div>
        <button type="submit" className={styles.button}>
          Шукати
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
