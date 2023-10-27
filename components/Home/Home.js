import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles["landing-text"]}>
        <p className={styles["number-one"]}>#1</p>
        <p className={styles.tagline}>Present education in beautiful way!</p>
      </div>
      <div className={styles.description}>
        <p>
          Always on the lookout for the hi-tech advancements. Build not only a
          product that can sell well, but a platform through which to deliver
          it.
        </p>
        <div className={styles["description-btn"]}>
          <button className={styles["start-btn"]}>Start now</button>
          <button className={styles["learn-btn"]}>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
