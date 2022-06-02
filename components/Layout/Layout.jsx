import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main_content}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
