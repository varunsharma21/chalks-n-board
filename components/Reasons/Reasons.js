import React from "react";
import styles from "./Reasons.module.css";
import Reason from "./Reason";
import man from "./../../assets/Images/man.jpg";

function Reasons() {
  return (
    <div className={styles.reasons}>
      <div className={styles}>
        <p className={styles.heading}>Few Reasons Why Choose Us</p>
        <Reason />
        <Reason />
        <Reason />
        <img src={man} alt="" />
        <img src={man} alt="" />
        <img src={man} alt="" />
      </div>
    </div>
  );
}

export default Reasons;
