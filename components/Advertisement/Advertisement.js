import React from "react";
import styles from "./Advertisement.module.css";
import man from "./../../assets/Images/man.jpg";

function Advertisement() {
  return (
    <div className={styles.advertisement}>
      <img src={man} alt="" />
      <div className={styles.explore}>
        <p className={styles.heading}>
          <span className={styles.highlighted}>Welcome</span> To Our Campus
        </p>
        <p className={styles.desc}>
          Always on the lookout for the hi-tech advancements. Build a product
          that will sell well
        </p>
        <div className={styles["explore-btns"]}>
          <button className={styles["start-now-btn"]}>Start now</button>
          <button className={styles["learn-more-btn"]}>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Advertisement;
