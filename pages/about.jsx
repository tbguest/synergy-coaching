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
          <h2>Zenovia Ursuliak MD, PhD, FRCPC</h2>
          <p>Vitality,</p>
          <p className={styles.inset1}>Connection,</p>
          <p className={styles.inset2}>Growth,</p>
          <p className={styles.inset3}>Creativity</p>
          <p className={styles.inset4}>Living in harmony with Nature</p>
          <p>are the values that guide my life.</p>
          <p>
            My mission is to help people though realize their greatest potential
            so collectively we can increase the vitality and well-being on this
            planet.
          </p>

          <p>
            This mission drew me to the Executive Coaching program at Royal
            Roads University in April 2022 and inspired Wild Ocean Coaching and
            Retreats.
          </p>

          <p>
            Since 2007 I have been a psychiatrist integrating pharmaceutical
            approaches with lifestyle counselling, psychotherapy, and herbal
            medicine. Training at the Centre for Mind-Body Medicine and the
            Bloom Institute of Holistic Living and Learning has expanded my
            approach to health.
          </p>

          <p>
            As a physician, I facilitate on-line sessions to healthcare
            professionals to promote connection, hope and wellbeing. As an
            academic, I led a task force to create an organizational wellness
            strategy for the Department of Psychiatry at Dalhousie University,
            and chair the committee implementing this strategy.
          </p>

          <p>
            I live with my family at Wild Ocean Lodge, an acreage immersed in
            nature, my most precious medicine.
          </p>
        </div>
        <div className={styles.content_image}>
          <Image
            width={884}
            height={1053}
            src={"/zen_cropped.jpg"}
            alt={"A headshot of the author"}
            className={styles.image}
          />
          <em>
            Coaching occurs through transformative conversation that inspires
            you to live a meaningful life and embrace your potential.
          </em>
        </div>
        <ContactButton
          style={{
            display: "block",
            "margin-left": "auto",
            "margin-right": "auto",
            "margin-top": "1rem",
          }}
        >
          Reach out
        </ContactButton>
      </div>
    </div>
  );
}
