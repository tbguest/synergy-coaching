import styles from "../styles/Page.module.css";
import Image from "next/image";

export default function Retreats() {
  return (
    <div className={styles.container}>
      <div className={styles.image_header}>
        <Image
          width={3648}
          height={2736}
          src={"/meadow.jpg"}
          alt={"View from a green hill overlooking the sea"}
          className={styles.image}
        />
      </div>
      <div className={styles.header_text}>
        <h1>Wellness Retreats</h1>
        <h2>{"Women Physicians' Wellness Retreat"}</h2>
        <h3>{"July 22-24, 2022"}</h3>
      </div>
      <div className={styles.content}>
        <p>
          Join Zenovia for an intimate gathering of women physicians who want to
          nourish their bodies, minds and spirits at Wild Ocean Lodge.
        </p>

        <p>
          Wild Ocean Lodge is 45 minutes from Halifax on the Aspotogan
          Peninsula. It is a small acreage embraced by forest on the west,
          overlooking St. Margaret&apos;s Bay to the east.
        </p>

        <p>
          This wellness workshop includes small group work where we will engage
          in supportive and transformative conversation, journaling, creative
          self-awareness exercises, breathwork and visualization. We will start
          each morning with a 45 minute yoga class with yoga instructor Cathy
          Guest at the Sail Loft Yoga Studio, a 5 minute walk from Wild Ocean
          Lodge.
        </p>

        <p>
          Healthy and delicious meals will be provided for you by Tyler Haut of
          Food People. Meals are prepared with locally grown produce and meats,
          including free range eggs and vegetables from Wild Ocean Lodge and
          organic staples from Food People. Tyler is happy to accommodate food
          sensitivities and preferences.
        </p>

        <p>
          Between the group sessions there will be plenty of free time. You can
          walk the forest paths, sit in contemplation in our gardens, soak in
          the hot tub, use the yoga studio for your own practice, or swim in the
          ocean. The Aspotogan peninsula supports trail and road cycling, as
          well as ocean kayaking. If you need bike or kayak rentals please visit
          our lovely neighbours at Freewheeling Adventures (rentals not include
          in retreat fees).
        </p>

        <p>
          Check in begins at 7 pm on Friday evening and our first group session
          begins at 8pm that evening. We will wrap up the retreat on Sunday
          morning at 11 am.
        </p>

        <p>
          There are four accommodations to choose from. Prices include the group
          workshops, yoga classes, meals and accommodations:
        </p>
        {/* </Event> */}
      </div>
    </div>
  );
}
