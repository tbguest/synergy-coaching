import styles from "../styles/Page.module.css";
import { ContactForm } from "../components/ContactForm";
import Image from "next/image";

export async function getStaticProps() {
  return { props: { title: "| Contact", description: "Contact page" } };
}

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.banner_container}>
        <Image
          layout="fill"
          src={"/beach_cropped.jpg"}
          alt={"Tropical beach at sunset"}
          className={styles.banner_image_justify_center}
          priority
        />
      </div>
      <div className={styles.content_title}>
        <h1>Contact</h1>
        <hr className={styles.hr} />
        <span className={styles.center}>
          <p>Book a spot now, or reach out with any questions.</p>
        </span>
      </div>
      <ContactForm />
    </div>
  );
}
