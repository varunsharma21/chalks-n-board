import React from "react";
import styles from "./Feature.module.css";
import man from "./../../assets/Images/man.jpg";

function Feature() {
  return (
    <div className={styles.container}>
      <div>
        <img src={man} alt="logo" />
      </div>
      <div className={styles.info}>
        <p className={styles["info-heading"]}>Up-To-Date Software</p>
        <p className={styles["info-desc"]}>
          Tincidunt felis dignissim justo congue, non rutrum tortor volutpat.
        </p>
      </div>
    </div>
  );
}

export default Feature;
