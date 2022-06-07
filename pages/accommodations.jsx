import styles from "../styles/Page.module.css";
import Image from "next/image";

export default function Accommodations() {
  return (
    <div className={styles.container}>
      <div className={styles.image_header_surf}></div>
      <div className={styles.content_title}>
        <h1>Accommodations</h1>
        <hr className={styles.hr} />
      </div>
      <div className={styles.content}>
        <div className={styles.content_text}>
          <p>
            Aliquip qui duis adipisicing irure occaecat non mollit consectetur
            minim qui anim. Ad nulla occaecat culpa elit cillum consequat.
            Ullamco magna elit anim cupidatat veniam labore. Adipisicing
            adipisicing deserunt nisi velit culpa officia qui sunt. Qui tempor
            mollit eiusmod Lorem veniam aute cillum voluptate eiusmod velit. Id
            consequat culpa consectetur irure ipsum id.
          </p>
        </div>
        <div className={styles.content_image}>
          <Image
            width={960}
            height={1280}
            src={"/rocks.jpg"}
            alt={"Stacked rocks beside the ocean"}
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
