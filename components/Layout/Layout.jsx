import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import styles from "./Layout.module.css";
import Head from "next/head";

const Layout = ({ children, documentHead }) => {
  const title = `Wild Ocean Coaching ${documentHead?.title ?? ""}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={documentHead?.description ?? ""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.content}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
