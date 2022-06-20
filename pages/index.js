import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Splash } from "../components/Splash";
import classNames from "classnames";

export default function Home() {
  return (
    <div className={styles.container}>
      <Splash />
      <div className={styles.content_container}>
        <div className={styles.welcome_content}>
          <h1>Life is a journey.</h1>
          <hr className={styles.hr} />
          <p>
            You can travel this journey with energy, passion and confidence that
            you are on the right path.
          </p>

          <p>
            {
              "Wild Ocean Coaching and Retreats provides services to help the traveller who needs time and space to revitalize, align their compass, discover inner resources and create momentum to enjoy life's journey."
            }
          </p>

          <p>This is an invitation to explore.</p>
        </div>
      </div>
      <div className={styles.contact_refer_content}>
        <h3>Book coaching, a retreat or ask a question</h3>
        <Link href={"/contact"}>
          <button className={styles.contact_button}>
            <a className={classNames(styles.nav_link, styles.a)}>
              Get in touch
            </a>
          </button>
        </Link>
      </div>
    </div>
  );
}
