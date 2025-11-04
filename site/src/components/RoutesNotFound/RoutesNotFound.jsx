import styles from "./RoutesNotFound.module.css"
import icon from "../../assets/glass/vectorstock_37964451.png"

const RoutesNotFound = ({text}) => {
  return (
    <div className={styles.container}>
      <img
      src={icon}
      alt="Іконка лупи"
      className={styles.icon}
      />
      <h2 className={styles.notFoundText}>
        {text}
      </h2>
    </div>
  )
}

export default RoutesNotFound