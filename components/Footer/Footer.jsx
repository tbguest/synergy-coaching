import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>{new Date().getFullYear()} &copy; Wild Ocean Coaching and Retreats.</p>
    </footer>
  );
};

export default Footer;
