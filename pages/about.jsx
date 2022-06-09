import styles from "../styles/Page.module.css";
import Image from "next/image";
import { ContactButton } from "../components/ContactButton";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.image_header_longboard}></div>
      <div className={styles.content_title}>
        <h1>About Me</h1>
        <hr className={styles.hr} />
      </div>
      <div className={styles.content}>
        <div className={styles.content_text}>
          <p>
            Adipisicing occaecat proident exercitation officia proident quis do
            dolor ullamco elit culpa ea nulla mollit. Ipsum aute do in aute.
            Commodo dolor laborum consequat quis sint sint mollit. Aliquip
            ullamco ex nulla amet quis consequat commodo et ea ad irure. Quis
            adipisicing nulla aute duis ad voluptate enim amet est nulla
            cupidatat non cupidatat reprehenderit. Velit sunt nostrud ullamco in
            veniam aliqua veniam est ut. Mollit minim exercitation in ipsum
            pariatur nulla elit eiusmod id reprehenderit ipsum culpa.
          </p>
          <ContactButton
            style={{
              display: "block",
              "margin-left": "auto",
              "margin-right": "auto",
              "margin-top": "3rem",
            }}
          >
            Reach out
          </ContactButton>
        </div>
        <div className={styles.content_image}>
          <Image
            width={960}
            height={1280}
            src={"/tree.jpg"}
            alt={"Tree with light shining from behind"}
            className={styles.image}
          />
          <em>
            Coaching occurs through transformative conversation that inspires
            you to live a meaningful life and embrace your potential.
          </em>
        </div>
      </div>
    </div>
  );
}
