import styles from "./Navbar.module.css";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className={styles.nav_container}>
      <Link href={"/"}>
        <a className={styles.nav_brand}>
          <h1>Synergy Coaching and&nbsp;Wellness</h1>
        </a>
      </Link>
      <Link href={"/"}>
        <a className={styles.nav_link}>Home</a>
      </Link>
      <Link href={"/coaching"}>
        <a className={styles.nav_link}>Coaching</a>
      </Link>
      <Link href={"/retreats"}>
        <a className={styles.nav_link}>Wellness Retreats</a>
      </Link>
      <Link href={"/contact"}>
        <a className={styles.nav_link}>Contact</a>
      </Link>
      <FiMenu className={styles.burger} />
    </nav>
  );
};

export default Navbar;
