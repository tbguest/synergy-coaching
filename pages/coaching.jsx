import styles from "../styles/Page.module.css";
import Image from "next/image";
import { NavButton } from "../components/NavButton";
import { PrismicText, PrismicRichText } from "@prismicio/react";
import { createClient } from "../prismicio";

const loader = ({ src, width, height, quality }) => {
  return `${src}?auto=compress,format&w=${width}&h=${height}&q=${
    quality || 75
  }`;
};

export async function getStaticProps() {
  // Client used to fetch CMS content.
  const client = createClient();

  // Page document for our homepage from the CMS.
  const page = await client.getByUID("page", "coaching");

  // Pass the homepage as prop to our page.
  return {
    props: { title: "| Coaching", description: "Coaching page", page },
  };
}

export default function Coaching({ page }) {
  console.log("page", page);

  return (
    <div className={styles.container}>
      <div className={styles.banner_container}>
        <Image
          width={3264}
          height={1002}
          layout="fill"
          src={"/surf_cropped.jpg"}
          alt={"Silouetted person with a surfboard by the sea"}
          className={styles.banner_image_justify_center_left}
        />
      </div>
      <div className={styles.content_title}>
        <h1>
          <PrismicText field={page.data.title} />
        </h1>
        <hr className={styles.hr} />
      </div>
      <div className={styles.content}>
        <div className={styles.content_text}>
          <PrismicRichText field={page.data.contentMain} />
        </div>
        <div className={styles.content_image}>
          <Image
            loader={loader}
            // width={3015}
            // height={3472}
            width={page.data.image.dimensions.width}
            height={page.data.image.dimensions.height}
            src={page.data.image.url}
            alt={page.data.image.alt}
            className={styles.image}
          />
          <em className={styles.italics}>
            <PrismicRichText field={page.data.contentAside} />
          </em>
        </div>
        <NavButton page="contact">
          <PrismicText field={page.data.buttonText} />
        </NavButton>
      </div>
    </div>
  );
}
