import styles from "./Advantages.module.css";
import routeIcon from "../../../assets/advantages/routeIcon.svg";
import busIcon from "../../../assets/advantages/busIcon.svg";
import supportIcon from "../../../assets/advantages/supportIcon.svg";
import priceIcon from "../../../assets/advantages/priceIcon.svg";
import onlineIcon from "../../../assets/advantages/onlineIcon.svg";
import Advantage from "../../../components/Home/Advantage/Advantage.jsx";

const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <div className={styles.container}>
        <Advantage img={routeIcon} text="Зручні маршрути" />
        <Advantage img={busIcon} text="Комфортні автобуси" />
        <Advantage img={supportIcon} text="Цілодбова підтримка" />
        <Advantage img={priceIcon} text="Низькі ціни" />
        <Advantage img={onlineIcon} text="Онлайн бронювання" />
      </div>
    </div>
  );
};

export default Advantages;
