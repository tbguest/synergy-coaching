import styles from "./Splash.module.css";
import { NavButton } from "../NavButton";

const Splash = () => {
  return (
    <div className={styles.container}>
      <div className={styles.action_items}>
        <NavButton
          page="retreats"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1rem",
          }}
        >
          Explore retreats
        </NavButton>
      </div>
    </div>
  );
};

export default Splash;
