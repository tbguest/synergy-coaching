import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>{new Date().getFullYear()} &copy; Synergy Coaching and Wellness.</p>
    </footer>
  );
};

export default Footer;
