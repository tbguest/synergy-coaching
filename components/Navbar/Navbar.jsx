import styles from "./Navbar.module.css";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className={styles.nav_container}>
      <a className={styles.nav_brand} href={"/"}>
        <h1>Zenovia Ursuliak</h1>
      </a>
      <a className={styles.nav_link} href={"/"}>
        Home
      </a>
      <a className={styles.nav_link} href={"/about"}>
        About
      </a>
      <a className={styles.nav_link} href={"/coaching"}>
        Coaching
      </a>
      <a className={styles.nav_link} href={"/retreats"}>
        Wellness Retreats
      </a>
      <a className={styles.nav_link} href={"/contact"}>
        Contact
      </a>
      <FiMenu className={styles.burger} />
    </nav>
  );
};

export default Navbar;
