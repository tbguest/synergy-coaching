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
          <h1 className={styles.nav_brand_text}>
            <span className={styles.stylyzed_header}>WILD OCEAN</span>{" "}
            <span className={styles.stylyzed_subheader}>
              Coaching&nbsp;and&nbsp;Retreats
            </span>
          </h1>
        </a>
      </Link>
      <Link href={"/"}>
        <a className={styles.nav_link}>Home</a>
      </Link>
      <Link href={"/coaching"}>
        <a className={styles.nav_link}>Coaching</a>
      </Link>
      <Link href={"/about"}>
        <a className={styles.nav_link}>About</a>
      </Link>
      <Link href={"/retreats"}>
        <a className={styles.nav_link}>Wellness Retreats</a>
      </Link>
      <Link href={"/accommodations"}>
        <a className={styles.nav_link}>Accommodations</a>
      </Link>
      <Link href={"/contact"}>
        <a className={styles.nav_link}>Contact</a>
      </Link>
      {menuOpen ? (
        <button
          className={styles.burger_button}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Close menu"
        >
          <FiX className={styles.burger} />
        </button>
      ) : (
        <button
          className={styles.burger_button}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <FiMenu className={styles.burger} />
        </button>
      )}
      {menuOpen && <NavMenu onClick={handleMenuClick} />}
    </nav>
  );
};

export default Navbar;
