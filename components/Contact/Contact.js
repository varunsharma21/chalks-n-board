import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.info}>
        <p className={styles.heading}>
          <span>Contact</span> us
        </p>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae
          est accumsan, efficitur velit eu, ullamcorper sapien. Suspendisse
          aliquam libero euismod, tempus nisl. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aenean vitae est accumsan, efficitur
          velit eu,
        </p>
      </div>
      <div className={styles.form}>
        <form className={styles["contact-form"]}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <input type="number" placeholder="Phone" />
          <input type="text" placeholder="Website" />
        </form>
        <button type="submit">Send Message</button>
      </div>
    </div>
  );
}

export default Contact;
