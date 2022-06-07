import styles from "../styles/Page.module.css";
import Image from "next/image";

export default function Retreats() {
  return (
    <div className={styles.container}>
      <div className={styles.image_header}></div>
      <div className={styles.content_title}>
        <h1>Wellness Retreats</h1>
        <hr className={styles.hr} />
      </div>
      <div className={styles.content}>
        <div className={styles.content_text}>
          {/* <div className={styles.content_title}>
            <h1>Wellness Retreats</h1>
            <hr className={styles.hr} />
          </div> */}
          <div className={styles.header_text}>
            <h2>{"Women Physicians' Wellness Retreat"}</h2>
            <h3>{"July 22-24, 2022"}</h3>
          </div>
          <p>
            Join Zenovia for an intimate gathering of women physicians who want
            to nourish their bodies, minds and spirits at{" "}
            <strong>Wild Ocean Lodge</strong>.
          </p>

          <p>
            This retreat includes small group work where we will engage in
            supportive and transformative conversation, journaling, and
            mind-body practices. Each morning starts with a 45-minute yoga class
            with Cathy Guest at the Sail Loft Yoga Studio, a 5-minute walk from
            Wild Ocean Lodge.
          </p>

          <p>
            Fees include the group workshops, yoga classes, meals,
            accommodations and HST. There are four accommodations to choose
            from:
          </p>

          <p>
            <strong>At Wild Ocean Lodge</strong> (shared bathroom, living room
            and kitchen on the main floor of lodge):
          </p>

          <ul>
            <li>Forestview room (king size bed): $665.25 single occupancy </li>
            <li>Oceanview room (queen size bed): $665.25 single occupancy</li>
            <li>Rustic Cabin (queen size bed): $521.50 single occupancy</li>
          </ul>

          <p>
            Accommodations are also available at the{" "}
            <strong>Sail Loft Yoga Studio</strong> (5-minute walk):
          </p>

          <ul>
            <li>
              Boathouse Apartment (queen size bed): $809.00 single occupancy.
              Private bathroom, living room and kitchen.
            </li>
          </ul>

          <p>
            Sharing a room with a friend is possible in the following
            accommodations:
          </p>

          <p>
            <strong>Wild Ocean Lodge:</strong>
          </p>

          <ul>
            <li>
              Forestview room (king size bed or 2 twin size beds): $550.25 per
              person
            </li>
            <li>Rustic Cabin (2 queen size beds): $478.38 per person</li>
          </ul>

          <p>
            <strong>Sail Loft Yoga Studio:</strong>
          </p>

          <ul>
            <li>
              Boathouse Apartment (queen size bed and queen size mattress):
              $593.38 per person
            </li>
          </ul>
        </div>
        <div className={styles.content_image}>
          <Image
            width={960}
            height={1280}
            src={"/butterfly.jpg"}
            alt={"Butterfly atop a flower"}
            className={styles.image}
          />
          {/* <h2>{"Women Physicians' Wellness Retreat at Wild Ocean Lodge"}</h2>
          <h3>July 22-24, 2022</h3> */}
          <em>
            {
              "Wild Ocean Lodge is 45 minutes from Halifax on the Aspotogan Peninsula. It is a small acreage embraced by forest on the west, overlooking St. Margaret's Bay to the east. "
            }
          </em>
          <p>
            <strong>Check-in:</strong> 5:45 - 7:45pm, Friday, July 22nd
          </p>
          <p>
            <strong>Workshop starts:</strong> 8pm, Friday, July 22nd
          </p>
          <p>
            <strong>Wrap up:</strong> 11 am, Sunday, July 24th{" "}
          </p>
          <p>
            Meals are prepared with locally grown and organic ingredients. We
            are happy to accommodate food sensitivities and preferences.{" "}
          </p>
          <p>
            Between sessions there will be plenty of free time. You can walk the
            gardens and forest paths, soak in the hot tub, use the yoga studio
            for your own practice, or swim in the ocean. You can also explore
            the Aspotogan peninsula by bike or kayak - rentals available at
            Freewheeling Adventures (rentals not included in retreat fees).{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
