import styles from "../styles/Page.module.css";
import Image from "next/image";
import { ContactButton } from "../components/ContactButton";

export default function Accommodations() {
  return (
    <div className={styles.container}>
      <div className={styles.image_header_rental}></div>
      <div className={styles.content_title}>
        <h1>Accommodations</h1>
        <hr className={styles.hr} />
      </div>
      <div className={styles.content}>
        <div className={styles.content_text}>
          <p>
            Wild Ocean Lodge is situated on a small acreage on the Aspotogan
            Peninsula, Nova Scotia, overlooking St. Margarets Bay to the east
            and embraced by forest on the west. This setting is perfect for
            people who enjoy the tranquillity of being in nature and want access
            to outdoor adventure. It is available for vacation rentals or
            small-scale retreats. We are located 45 minutes from Halifax and 10
            minutes from Hubbards and its amenities.
          </p>
          <p>
            There is a newly renovated timber frame guesthouse with two
            bedrooms, one bathroom with shower, dining area, living room and a
            well-stocked kitchen. The back deck has a BBQ and outdoor shower.{" "}
          </p>
          <p>
            While staying at Wild Ocean Lodge, you are welcome to explore the
            gardens, rest in a hammock in the tree house, catch frogs by the
            pond or hike the forest trails. We have excellent cycling on the
            Aspotogan Coastal Route (2 bikes available) and we are a 10 minute
            drive to Bayswater beach. Kayak and bike rentals are available at
            our neighbors,{" "}
            <a
              href={"https://www.freewheeling.ca/equipment-rentals/"}
              target="_blank"
              rel="noreferrer"
            >
              Freewheeling Adventures
            </a>
            .
          </p>
          <p>
            To see more photos or book a vacation rental please visit our
            listing on{" "}
            <a
              href={"https://airbnb.com/h/wild-ocean-lodge-nova-scotia"}
              target="_blank"
              rel="noreferrer"
            >
              Airbnb
            </a>
            .
          </p>
          <p>
            You can book Wild Ocean Lodge to host your own small-scale retreat
            or workshop where food can be provided by Tyler Haut of{" "}
            <a
              href={"https://www.foodpeople.ca/pages/about-us"}
              target="_blank"
              rel="noreferrer"
            >
              Food People
            </a>
            . Enquire about using our facilities for a retreat below.
          </p>
        </div>
        <div className={styles.content_image}>
          <Image
            width={749}
            height={998}
            src={"/cabin_summer.png"}
            alt={"Rustic cabin in a meadow on a green summer day"}
            className={styles.image}
          />
          <em>
            There is also a rustic cabin with two queen beds in the loft and a
            living area on the main floor with a refrigerator and an electric
            kettle. The cabin has no running water but drinking water is
            available through a water crock. Bathroom access is available in the
            main house, or in the guesthouse if you are renting it.
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
          Book now
        </ContactButton>
      </div>
    </div>
  );
}
