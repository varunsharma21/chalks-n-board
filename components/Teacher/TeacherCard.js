import React from "react";
import styles from "./TeacherCard.module.css";
import man from "./../../assets/Images/man.jpg";

function TeacherCard() {
  return (
    <div className={styles["teacher-card"]}>
      <img className={styles["teacher-img"]} src={man} alt="teacher" />
      <p className={styles.name}>Dsvid Nihero</p>
      <p className={styles.position}>Consultant Architect</p>
      <div className={styles["contact-icons"]}>
        <img src={man} alt="teacher" />
        <img src={man} alt="teacher" />
        <img src={man} alt="teacher" />
        <img src={man} alt="teacher" />
      </div>
    </div>
  );
}

export default TeacherCard;
