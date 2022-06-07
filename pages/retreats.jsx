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
            to nourish their bodies, minds and spirits at Wild Ocean Lodge.
          </p>

          <p>
            Wild Ocean Lodge is 45 minutes from Halifax on the Aspotogan
            Peninsula. It is a small acreage embraced by forest on the west,
            overlooking St. Margaret&apos;s Bay to the east.
          </p>

          <p>
            This wellness workshop includes small group work where we will
            engage in supportive and transformative conversation, journaling,
            creative self-awareness exercises, breathwork and visualization. We
            will start each morning with a 45 minute yoga class with yoga
            instructor Cathy Guest at the Sail Loft Yoga Studio, a 5 minute walk
            from Wild Ocean Lodge.
          </p>

          <p>
            Healthy and delicious meals will be provided for you by Tyler Haut
            of Food People. Meals are prepared with locally grown produce and
            meats, including free range eggs and vegetables from Wild Ocean
            Lodge and organic staples from Food People. Tyler is happy to
            accommodate food sensitivities and preferences.
          </p>

          <p>
            Between the group sessions there will be plenty of free time. You
            can walk the forest paths, sit in contemplation in our gardens, soak
            in the hot tub, use the yoga studio for your own practice, or swim
            in the ocean. The Aspotogan peninsula supports trail and road
            cycling, as well as ocean kayaking. If you need bike or kayak
            rentals please visit our lovely neighbours at Freewheeling
            Adventures (rentals not include in retreat fees).
          </p>

          <p>
            Check in begins at 7 pm on Friday evening and our first group
            session begins at 8pm that evening. We will wrap up the retreat on
            Sunday morning at 11 am.
          </p>

          <p>
            There are four accommodations to choose from. Prices include the
            group workshops, yoga classes, meals and accommodations:
          </p>

          <p>All prices include HST.</p>

          <strong>Wild Ocean Lodge:</strong>
          <ul>
            <li>Forestview room (king size bed): $665.25 single occupancy</li>
            <li>Oceanview room (queen size bed): $665.25 single occupancy</li>
            <li>Rustic Cabin (queen size bed): $521.50 single occupancy</li>
          </ul>
          <p>
            People staying at the Wild Ocean Lodge site will share a bathroom,
            living room and kitchen on the main floor of the lodge.
          </p>

          <p>
            Accommodations are also available on site at the Sail Loft Yoga
            Studio (5 minute walk):
          </p>
          <ul>
            <li>
              Boathouse Apartment (queen size bed): $809.00 single occupancy.
              Private bathroom, living room and kitchen.
            </li>
          </ul>

          <p>
            If you would like to share a room with a friend, the following
            accommodations are available:
          </p>
          <strong>Wild Ocean Lodge:</strong>
          <ul>
            <li>
              Forestview room (king size bed or 2 twin size beds): $550.25 per
              person
            </li>
            <li>Rustic Cabin( 2 queen size beds): $478.38 per person</li>
          </ul>

          <strong>Sail Loft Yoga Studio:</strong>
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
          <em>
            Ullamco et non irure eu ea magna veniam. Magna culpa pariatur culpa
            adipisicing. Voluptate reprehenderit non nulla ad nulla consequat ea
            in deserunt duis et ex officia. Qui anim eiusmod elit culpa laborum
            consectetur eiusmod nostrud irure veniam eiusmod ex ea. Culpa ipsum
            laborum ex laboris eiusmod dolore adipisicing pariatur aliqua ut
            exercitation amet eu enim.
          </em>
        </div>
      </div>
    </div>
  );
}
