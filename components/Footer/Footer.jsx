import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>{new Date().getFullYear()} &copy; Synergy Coaching.</p>
    </footer>
  );
};

export default Footer;
