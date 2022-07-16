import Link from "next/link";
import styles from "./NavButton.module.css";

const NavButton = ({ page, children, style }) => {
  return (
    <Link href={"/" + page}>
      <button
        style={style}
        className={styles.contact_button}
        aria-label={`Go to ${page} page`}
      >
        <a className={styles.nav_link}>{children}</a>
      </button>
    </Link>
  );
};

export default NavButton;
