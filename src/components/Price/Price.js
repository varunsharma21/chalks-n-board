import React from "react";
import styles from "./Price.module.css";
import PriceCard from "./PriceCard";

function Price() {
  return (
    <div className={styles.price}>
      <h1>Approdable Price</h1>
      <p>A modern and unique style </p>
      <div className={styles["price-cards"]}>
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </div>
  );
}

export default Price;
