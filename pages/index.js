import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import Link from "next/link";
import { Splash } from "../components/Splash";

export default function Home() {
  return (
    <div className={styles.container}>
      <Splash />
      <div className={styles.content_container}>
        <div className={styles.welcome_content}>
          <h1>Welcome</h1>
          <p>
            In aute eiusmod duis ea mollit amet excepteur magna. Quis amet
            consequat veniam officia elit. Dolor nisi incididunt mollit Lorem.
            Minim duis id aliqua sit ipsum do ea et in sunt deserunt
            reprehenderit. Minim nostrud non elit non cillum labore. Laboris
            nulla pariatur amet ex. Excepteur duis quis occaecat cillum.
          </p>
          <p>Call to action</p>
          <p>Refer to contact page</p>
        </div>
        <div className={styles.contact_refer}>
          <h3>
            Reserve a spot, or ask a question. I&apos;d love to hear from you.
          </h3>
          <Link href={"/contact"}>
            <button className={styles.contact_button}>
              <a className={styles.nav_link}>Get in touch</a>
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}
