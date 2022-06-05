import styles from "../styles/Page.module.css";
import { ContactForm } from "../components/ContactForm";
import Image from "next/image";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.image_header}></div>
      <h1>Contact</h1>
      <div className={styles.content}>
        <p>Book a spot now, or reach out with any questions.</p>
        <p>{"We're happy to hear from you!"}</p>
      </div>
      <ContactForm />
    </div>
  );
}
