import styles from "./DataForm.module.css"
import BookingHeader from "../../../components/BookingForm/BookingHeader/BookingHeader.jsx";
import RouteTimeline from "../../../components/BookingForm/RouteTimeline/RouteTimeline.jsx";
import Button from "../../../ui/Button/Button.jsx";

const DataForm = () => {
  return (
    <div className={styles.dataForm}>
      <BookingHeader from="Ужгород" to="Львів" date="12.05.2025" />
      <div className={styles.content}>
        <div className={styles.table}>
          <input type="text" placeholder="Ім'я" className={styles.input} />
          <input type="text" placeholder="Прізвище" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <input type="tel" placeholder="Телефон" className={styles.input} />
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.timelineWrapper}>
            <RouteTimeline />
          </div>
          <div className={styles.price}>700 грн</div>
        </div>
      </div>
      <div className={styles.footer}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" className={styles.checkbox} />
          <span className={styles.checkboxText}>Я погоджуюсь з умовами користування</span>
        </label>
        <div className={styles.button}>
          <Button>До оплати</Button>
        </div>
      </div>
    </div>
  )
}

export default DataForm;