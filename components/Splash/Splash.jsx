import styles from "./Splash.module.css";
import { NavButton } from "../NavButton";
import Image from "next/image";

const Splash = () => {
  return (
    <div className={styles.splash_container}>
      <Image
        layout="fill"
        src={"/images/compressed/wave.jpg"}
        alt={
          "Barelling wave crashing in blue-green water with an empty beach in the background"
        }
        className={styles.banner_image}
        priority
      />
      <div className={styles.action_items}>
        <NavButton page="retreats">Explore retreats</NavButton>
      </div>
    </div>
  );
};

export default Splash;
