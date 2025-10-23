import styles from "./Advantages.module.css";
import routeIcon from "../../assets/iconsAdvantages/routeIcon.svg";
import busIcon from "../../assets/iconsAdvantages/busIcon.svg";
import supportIcon from "../../assets/iconsAdvantages/supportIcon.svg";
import priceIcon from "../../assets/iconsAdvantages/priceIcon.svg";
import onlineIcon from "../../assets/iconsAdvantages/onlineIcon.svg";
import AdvantageItem from "../../components/AdvantageItem/AdvantageItem.jsx";

const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <div className={styles.container}>
        <AdvantageItem img={routeIcon} text="Зручні маршрути" />
        <AdvantageItem img={busIcon} text="Комфортні автобуси" />
        <AdvantageItem img={supportIcon} text="Цілодбова підтримка" />
        <AdvantageItem img={priceIcon} text="Низькі ціни" />
        <AdvantageItem img={onlineIcon} text="Онлайн бронювання" />
      </div>
    </div>
  );
};

export default Advantages;
