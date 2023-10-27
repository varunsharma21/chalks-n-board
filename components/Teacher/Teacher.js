import React from "react";
import styles from "./Teacher.module.css";
import TeacherCard from "./TeacherCard";

function Teacher() {
  return (
    <div className={styles.teacher}>
      <div className={styles.heading}>
        <p>Our Best Teacher</p>
        <button>View Teacher</button>
      </div>
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
    </div>
  );
}

export default Teacher;
