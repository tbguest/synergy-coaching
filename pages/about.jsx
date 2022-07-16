import styles from "../styles/Page.module.css";
import Image from "next/image";
import { NavButton } from "../components/NavButton";
import classNames from "classnames";

export async function getStaticProps() {
  return { props: { title: "| About", description: "About page" } };
}

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.banner_container}>
        <Image
          width={3840}
          height={1101}
          layout="fill"
          src={"/longboard_cropped.jpg"}
          alt={
            "Person sitting on a long surfboard in green, calm water, viewed from above"
          }
          className={styles.banner_image_justify_center}
        />
      </div>{" "}
      <div className={styles.content_title}>
        <h1>About Me</h1>
        <hr className={styles.hr} />
      </div>
      <div className={styles.page_content}>
        <h2>Zenovia Ursuliak MD, PhD, FRCPC</h2>
        <p>
          My mission is to help people realize their greatest potential so
          collectively we can increase the vitality and well-being on this
          planet.
        </p>

        <p>
          This mission drew me to the Executive Coaching program at Royal Roads
          University in April 2022 and inspired Wild Ocean Coaching and
          Retreats.
        </p>

        <p>
          Since 2007 I have been a psychiatrist integrating pharmaceutical
          approaches with lifestyle counselling, psychotherapy, and herbal
          medicine. Training at the Centre for Mind-Body Medicine and the Bloom
          Institute of Holistic Living and Learning has expanded my approach to
          health.
        </p>

        <p>
          As a physician, I facilitate on-line sessions to healthcare
          professionals to promote connection, hope and wellbeing. As an
          academic, I led a task force to create an organizational wellness
          strategy for the Department of Psychiatry at Dalhousie University, and
          chair the committee implementing this strategy.
        </p>

        <p>
          I live with my family at Wild Ocean Lodge, an acreage immersed in
          nature, my most precious medicine.
        </p>
      </div>
      <div className={styles.page_grid}>
        <div className={styles.image}>
          <Image
            width={884}
            height={1053}
            objectFit={"contain"}
            src={"/zen_cropped.jpg"}
            alt={"A headshot of the author"}
          />
        </div>
        <div className={styles.page_grid_text}>
          <div className={styles.fixed_layout}>
            <p>The values that guide my life</p>
            <p className={styles.stylized}>Vitality</p>
            <p className={classNames(styles.inset1, styles.stylized)}>
              Connection
            </p>
            <p className={classNames(styles.inset2, styles.stylized)}>Growth</p>
            <p className={classNames(styles.inset3, styles.stylized)}>
              Creativity
            </p>
            <p className={classNames(styles.inset4, styles.stylized)}>
              Living in harmony with Nature
            </p>
          </div>
          <NavButton page="contact">Reach out</NavButton>
        </div>
      </div>
    </div>
  );
}
