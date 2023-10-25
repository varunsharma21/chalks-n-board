import React from "react";
import styles from "./Features.module.css";
import Feature from "./Feature";

function Features() {
  return (
    <div className={styles.features}>
      <Feature />
      <Feature />
      <Feature />
      <Feature />
      <Feature />
      <Feature />
    </div>
  );
}

export default Features;
