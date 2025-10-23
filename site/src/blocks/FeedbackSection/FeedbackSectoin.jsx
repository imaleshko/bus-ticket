import styles from "./Feedback.module.css";
import Feedback from "../../components/Feedback/Feedback.jsx";

const FeedbackSection = () => {
  return (
    <section className={styles.section}>
      <Feedback />
    </section>
  );
};

export default FeedbackSection;
