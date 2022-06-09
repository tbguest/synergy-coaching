import Link from "next/link";
import styles from "./ContactButton.module.css";

const ContactButton = ({ children, style }) => {
  return (
    <Link href={"/contact"}>
      <button style={style} className={styles.contact_button}>
        <a className={styles.nav_link}>{children}</a>
      </button>
    </Link>
  );
};

export default ContactButton;
