import styles from "../styles/Page.module.css";
import Image from "next/image";
import { ContactButton } from "../components/ContactButton";

export default function Coaching() {
  return (
    <div className={styles.container}>
      <div className={styles.image_header_surf}></div>
      <div className={styles.content_title}>
        <h1>Coaching</h1>
        <hr className={styles.hr} />
      </div>
      <div className={styles.content}>
        <div className={styles.content_text}>
          <p>
            The{" "}
            <a
              href={
                "https://experiencecoaching.com/?utm_source=ICF&amp%3Butm_medium=direct-link&amp%3Butm_campaign=icf-to-ec"
              }
              target="_blank"
              rel="noreferrer"
              className={styles.a}
            >
              International Coaching Federation
            </a>{" "}
            defines coaching as partnering with people in a thought-provoking
            and creative process that inspires them to maximize their personal
            and professional potential.
          </p>
          <p>
            The coach is the expert in the coaching process, and you are the
            expert in your own life&apos;s journey.
          </p>
          <p>
            I am committed to being fully present and having impactful
            conversations with you.
          </p>
          <p>
            When you meet my intentions with your own intentions, our
            conversation will generate momentum in your life.
          </p>
          <p>
            Through coaching conversations, you will find clarity about your
            priorities, enhance your self- awareness, discover sources for
            resiliency and strength, align with your deepest values, and gain
            perspectives that liberate you.
          </p>
          <p>
            I invite you to fully commit to yourself and discover how coaching
            will empower you to create the life you want.
          </p>
        </div>
        <div className={styles.content_image}>
          <Image
            width={3015}
            height={3472}
            src={"/rocks.jpg"}
            alt={"Stacked rocks beside the ocean"}
            className={styles.image}
          />
          <em className={styles.italics}>
            Coaching occurs through transformative conversation that inspires
            you to live a meaningful life and embrace your potential.
          </em>
        </div>
        <ContactButton
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1rem",
          }}
        >
          Learn more
        </ContactButton>
      </div>
    </div>
  );
}
