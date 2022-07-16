import styles from "./Splash.module.css";
import { NavButton } from "../NavButton";

const Splash = () => {
  return (
    <div className={styles.container}>
      <div className={styles.action_items}>
        <NavButton page="retreats">Explore retreats</NavButton>
      </div>
    </div>
  );
};

export default Splash;
