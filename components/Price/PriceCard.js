import React from "react";
import styles from "./PriceCard.module.css";
import man from "./../../assets/Images/man.jpg";

function PriceCard() {
  return (
    <div className={styles.container}>
      <img src={man} alt="" />
      <h3>Personal</h3>
      <p>
        <span className={styles.price}>25$</span>/month
      </p>
      <p>100,000 messages</p>
      <p>unlimited data</p>
      <p>unlimited users</p>
      <p>first 30 days free</p>
      <button>Learn more</button>
    </div>
  );
}

export default PriceCard;
