import styles from "./SuccessForm.module.css"
import { Link } from "react-router";

const SuccessForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <h1 className={styles.title}>Успішно!</h1>
        <p className={styles.text}>
          Ви завжди можете знайти квиток за посиланням
        </p>
        <Link to="/accounttickets" className={styles.link}>
          Ваші квитки
        </Link>
      </div>
    </div>
  )
}

export default SuccessForm