import styles from "./NavMenu.module.css";
import Link from "next/link";
import { useEffect, useRef } from "react";

const NavMenu = ({ onClick }) => {
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClick();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <ul className={styles.container} ref={menuRef}>
      <li>
        <Link href={"/"}>
          <a className={styles.nav_link} onClick={onClick}>
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link href={"/coaching"}>
          <a className={styles.nav_link} onClick={onClick}>
            Coaching
          </a>
        </Link>
      </li>
      <li>
        <Link href={"/retreats"}>
          <a className={styles.nav_link} onClick={onClick}>
            Wellness Retreats
          </a>
        </Link>
      </li>
      <li>
        <Link href={"/contact"}>
          <a className={styles.nav_link} onClick={onClick}>
            Contact
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
