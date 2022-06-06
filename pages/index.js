import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Splash } from "../components/Splash";

export default function Home() {
  return (
    <div className={styles.container}>
      <Splash />
      <div className={styles.content_container}>
        <div className={styles.welcome_content}>
          <h1>Welcome</h1>
          <hr className={styles.hr} />
          <p>
            Life is a journey. You can travel with this journey with energy,
            passion and confidence that you are on the right path.
          </p>

          <p>
            {
              "Synergy Coaching and Wellness provides services to help the traveller who needs time and space to revitalize, align their compass, discover inner resources and create momentum to enjoy life's journey."
            }
          </p>

          <p>This is an invitation to explore Synergy.</p>
        </div>
      </div>
      <div className={styles.contact_refer_content}>
        <h3>
          Reserve a spot, or ask a question. I&apos;d love to hear from you.
        </h3>
        <Link href={"/contact"}>
          <button className={styles.contact_button}>
            <a className={styles.nav_link}>Get in touch</a>
          </button>
        </Link>
      </div>
    </div>
  );
}
