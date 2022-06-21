import styles from "../styles/Page.module.css";
import Image from "next/image";
import { ContactButton } from "../components/ContactButton";
import Link from "next/link";
import { GiCurledLeaf } from "react-icons/gi";
import classNames from "classnames";

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
          <div className={styles.header_text}>
            <h2>{"Women Physicians' Wellness Retreat"}</h2>
            <h3>{"July 22-24, 2022"}</h3>
          </div>
          <p>
            Join Zenovia for an intimate gathering of women physicians who want
            to nourish their bodies, minds and spirits at{" "}
            <Link href={"/accommodations"}>
              <a className={classNames(styles.nav_link, styles.a)}>
                Wild Ocean Lodge
              </a>
            </Link>
            . Wild Ocean Lodge is an acreage on the Aspotogan Peninsula, Nova
            Scotia, embraced by forest on the west, overlooking St. Margarets
            Bay to the east.
          </p>

          <p>
            The retreat includes small group work where we will engage in
            supportive and transformative conversations and mind-body practices.
            Each morning starts with a 45 minute yoga class with{" "}
            <a
              href={"https://sailloftyoga.com/SailLoftBio.html"}
              target="_blank"
              rel="noreferrer"
              className={styles.a}
            >
              Cathy Guest
            </a>{" "}
            at the{" "}
            <a
              href={"https://sailloftyoga.com/SailLoftAbout.html"}
              target="_blank"
              rel="noreferrer"
              className={styles.a}
            >
              Sail Loft Yoga Studio
            </a>
            , a 5 minute walk from Wild Ocean Lodge.
          </p>

          <p>
            Meals are prepared with locally grown and organic ingredients. We
            are happy to accommodate food sensitivities and preferences.
          </p>

          <p>
            <strong>Check-in:</strong> 5:45 - 7:45pm, Friday, July 22nd
          </p>
          <p>
            <strong>Retreat starts:</strong> 8pm, Friday, July 22nd
          </p>
          <p>
            <strong>Retreat ends:</strong> 11 am, Sunday, July 24th
          </p>

          <p>
            Between sessions there will be plenty of free time. You can walk the
            gardens and forest paths, soak in the hot tub, use the yoga studio
            for your own practice, or swim in the ocean. You can explore the
            Aspotogan peninsula by bike or kayak - rentals available at{" "}
            <a
              href={"https://www.freewheeling.ca/equipment-rentals/"}
              target="_blank"
              rel="noreferrer"
              className={styles.a}
            >
              Freewheeling Adventures
            </a>{" "}
            (rentals not included in retreat fees).
          </p>
          <p>
            <strong>Retreat fees</strong> include the group workshops, yoga
            classes, meals, accommodations and HST. There are four
            accommodations to choose from, some can be shared with a friend.
          </p>
          <span className={styles.pagebreak}>
            <GiCurledLeaf className={styles.icons} />
            <GiCurledLeaf className={styles.icons} />
            <GiCurledLeaf className={styles.icons} />
          </span>
        </div>
        <div className={styles.content_image}>
          <Image
            width={960}
            height={1280}
            src={"/butterfly.jpg"}
            alt={"Butterfly atop a flower"}
            className={styles.image}
          />
          <p>
            <strong className={styles.emphasis}>
              Retreat Fees/Accommodations
            </strong>
          </p>
          <p>
            <Link href={"/accommodations"}>
              <a className={classNames(styles.nav_link, styles.a)}>
                <strong>Wild Ocean Lodge</strong>
              </a>
            </Link>{" "}
            (shared bathroom, living room and kitchen on the main floor of
            lodge):
          </p>
          <ul>
            <li>
              Forestview room (king size bed or 2 twins): $665.25 single
              occ./$550.25 PP double occ.
            </li>
            <li>Oceanview room (queen size bed): $665.25 single occupancy</li>
            <li>
              Rustic Cabin (2 queen size beds): $521.50 single occ. /$478.38 PP
              double occ.
            </li>
          </ul>
          <p>
            <strong>Sail Loft Yoga Studio</strong> (Private bathroom, living
            room and kitchen):
          </p>
          <ul>
            <li>
              <a
                href={"https://sailloftyoga.com/boathouse-loft-rental.html"}
                target="_blank"
                rel="noreferrer"
                className={styles.a}
              >
                Boathouse Apartment
              </a>{" "}
              (queen size bed): $809.00 single occ./$593.38 PP double occ.
            </li>
          </ul>
        </div>
        <ContactButton
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1rem",
          }}
        >
          Reach out
        </ContactButton>
      </div>
    </div>
  );
}
