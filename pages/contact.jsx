import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ContactForm } from "../components/ContactForm";

export default function Contact() {
  return (
    <div className={styles.container}>
      <ContactForm />
    </div>
  );
}
