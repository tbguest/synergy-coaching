import styles from "../styles/Page.module.css";
import { ContactForm } from "../components/ContactForm";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.image_header_beach}></div>
      <div className={styles.content_title}>
        <h1>Contact</h1>
        <hr className={styles.hr} />
        <span className={styles.center}>
          <p>Book a spot now, or reach out with any questions.</p>
        </span>
      </div>
      <ContactForm />
    </div>
  );
}
