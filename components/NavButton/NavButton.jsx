import Link from "next/link";
import styles from "./NavButton.module.css";

const NavButton = ({ page, children }) => {
  return (
    <button className={styles.button} aria-label={`Go to ${page} page`}>
      <Link href={`/${page}`} className={styles.nav_link}>
        <a className={styles.nav_anchor}>{children}</a>
      </Link>
    </button>
  );
};

export default NavButton;
