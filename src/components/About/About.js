import React from "react";
import { Element } from "react-scroll"; // Import Element from react-scroll
import styles from "./About.module.css";

function About() {
  return (
    <Element name="about">
      {/* Add an Element with a name */}
      <div id={styles.about} className={styles.about}>
        <div className={styles.container}>
          <h2>About us</h2>
          <p>A modern and unique style</p>
          <div className={styles.services}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default About;

// import React from "react";
// import styles from "./About.module.css";

// function About() {
//   return (
//     <div id={styles.about} className={styles.about}>
//       <div className={styles.container}>
//         <h2>About us</h2>
//         <p>A modern and unique style</p>
//         <div className={styles.services}>
//           <div className={styles.card}></div>
//           <div className={styles.card}></div>
//           <div className={styles.card}></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
