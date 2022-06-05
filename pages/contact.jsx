import styles from "../styles/Page.module.css";
import { ContactForm } from "../components/ContactForm";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.image_header}></div>
      <div className={styles.content}>
        <h1>Contact</h1>
        <hr className={styles.hr} />
        <p>Book a spot now, or reach out with any questions.</p>
      </div>
      <ContactForm />
    </div>
  );
}
