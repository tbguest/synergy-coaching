import { NavButton } from "../components/NavButton";
import { Splash } from "../components/Splash";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  return { props: { title: "", description: "Home page" } };
}

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
        <h2>Book coaching, a retreat or ask a question</h2>
        <NavButton
          page="contact"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1rem",
          }}
        >
          Get in touch
        </NavButton>
      </div>
    </div>
  );
}
