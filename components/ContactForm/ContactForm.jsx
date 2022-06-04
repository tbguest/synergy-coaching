import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = ({ children }) => {
  return (
    <>
      <form className={styles.form}>
        <h1>Send a message</h1>

        <label htmlFor="fullname" className={styles.form_label}>
          Full name<span className={styles.highlight}>*</span>
        </label>
        <input type="text" name="fullname" className={styles.input} />

        <label htmlFor="email" className={styles.form_label}>
          E-mail<span className={styles.highlight}>*</span>
        </label>
        <input type="email" name="email" className={styles.input} />

        <label htmlFor="subject" className={styles.form_label}>
          Subject<span className={styles.highlight}>*</span>
        </label>
        <input type="text" name="subject" className={styles.input} />

        <label htmlFor="message" className={styles.form_label}>
          Message<span className={styles.highlight}>*</span>
        </label>
        <textarea name="message" className={styles.input}></textarea>
        <div className={styles.button_container}>
          <button className={styles.button}>Send</button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
