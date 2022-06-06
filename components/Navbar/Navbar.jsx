import { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { NavMenu } from "./NavMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.nav_container}>
      <Link href={"/"}>
        <a className={styles.nav_brand}>
          <h1>
            <span className={styles.stylyzed_header}>Synergy</span> Coaching
            and&nbsp;Wellness
          </h1>
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
      {menuOpen ? (
        <button
          className={styles.burger_button}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiX className={styles.burger} />
        </button>
      ) : (
        <button
          className={styles.burger_button}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu className={styles.burger} />
        </button>
      )}
      {menuOpen && <NavMenu onClick={handleMenuClick} />}
    </nav>
  );
};

export default Navbar;
