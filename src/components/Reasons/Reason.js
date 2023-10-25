import React from "react";
import styles from "./Reason.module.css";

function Reason() {
  return (
    <div className={styles.reason}>
      <p className={styles.number}>.01</p>
      <p className={styles.heading}>Experience Yourself</p>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magni
        temporibus voluptates adipisicing.Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
      </p>
    </div>
  );
}

export default Reason;
