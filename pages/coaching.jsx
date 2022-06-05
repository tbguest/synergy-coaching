import styles from "../styles/Page.module.css";
import Image from "next/image";

export default function Coaching() {
  return (
    <div className={styles.container}>
      <div className={styles.image_header}></div>
      <div className={styles.content}>
        <h1>Coaching</h1>
        <hr className={styles.hr} />
        <p>
          Coaching occurs through transformative conversation that inspires you
          to live a meaningful life and embrace your potential.
        </p>
        <p>
          I am committed to being fully present and having impactful
          converations with you.
        </p>
        <p>
          When you meet my intentions with your own intentions, our coversation
          will harness the synergy between us to create momentum in your life.
        </p>
        <p>
          You will envision your highest aspirations, enhance your
          self-awareness, discover sources for resiliency and strength, align
          with your deepest values, and gain perspectives that liberate you.
        </p>
        <p>
          Integrating these aspects of yourself generates synergy, empowering
          your transformation so you can create the life you want.
        </p>
        <div className={styles.portrait_image_wrapper}>
          <Image
            width={960}
            height={1280}
            src={"/rocks.jpg"}
            alt={"Stacked rocks beside the ocean"}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
