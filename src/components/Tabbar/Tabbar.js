import React from "react";
import styles from "./Tabbar.module.css";
import { Link } from "react-scroll";

function Tabbar() {
  return (
    <div className={styles.tabbar}>
      <h2>Educative</h2>
      <ul>
        <li>Home</li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>Teacher</li>
        <li>Price</li>
        <li>Blog</li>
      </ul>
    </div>
  );
}

export default Tabbar;
