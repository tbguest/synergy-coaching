import { NavButton } from "../components/NavButton";
import { Splash } from "../components/Splash";
import styles from "../styles/Home.module.css";
import { PrismicText, PrismicRichText } from "@prismicio/react";
import { createClient, imageLoader } from "../prismicio";

export async function getStaticProps() {
  // Client used to fetch CMS content.
  const client = createClient();

  // Page document for our homepage from the CMS.
  const page = await client.getByUID("page", "home");

  // Pass the homepage as prop to our page.
  return {
    props: {
      title: "",
      description:
        "Wild Ocean Coaching and Retreats: Professional coaching services and wellness retreats",
      page,
    },
  };
}

export default function Home({ page }) {
  return (
    <div className={styles.container}>
      <Splash />
      <div className={styles.content_container}>
        <div className={styles.welcome_content}>
          <h1>
            <PrismicText field={page.data.title} />
          </h1>
          <hr className={styles.hr} />
          <PrismicRichText field={page.data.contentMain} />
        </div>
      </div>
      <div className={styles.contact_refer_content}>
        <h2>Book coaching, a retreat or ask a question</h2>
        <NavButton page="contact">
          <PrismicText field={page.data.buttonText} />
        </NavButton>
      </div>
    </div>
  );
}
