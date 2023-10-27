import React from "react";
import styles from "./Testimonials.module.css";
import man from "./../../assets/Images/man.jpg";

function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <h2>
        <span className={styles.highlighted}>Our</span> Testimonials
      </h2>
      <img src={man} alt="" />
      <p className={styles.desc}>
        Donec eget elit vel urna varius pharetra. Suspendisse sodales venenatis
        lorem nec tincidunt. Donec dignissim purus ut nulla ultricies
      </p>
      <p className={styles.name}>Dsvid Nihero</p>
      <p className={styles.position}>Consultant Architect</p>
    </div>
  );
}

export default Testimonials;
