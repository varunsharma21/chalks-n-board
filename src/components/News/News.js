import React from "react";
import styles from "./News.module.css";
import horizontalMeetingImage from "./../../assets/Images/horizontal-news.jpg";
import meetingImage from "./../../assets/Images/standing-meeting-news.png";

function News() {
  return (
    <div className={styles.news}>
      <p className={styles.heading}>
        <span className={styles.highlighted}>Our</span> News
      </p>
      <div className={styles.containers}>
        <div className={styles["left-container"]}>
          <img src={horizontalMeetingImage} alt="" />
          <p className={styles["blog-name"]}>
            Free Online Courses from Top Universities
          </p>
          <p className={styles.date}>Emmajohnson l May 17, 2019</p>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            vitae est accumsan, efficitur velit eu, ullamcorper sapien.
            Suspendisse aliquam libero euismod, tempus nisl. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Aenean vitae est accumsan,
            efficitur velit eu, ullamcorper sapien. Suspendisse aliquam libero
            euismod, tempus nisl. Vivamus bibendum in risus sit amet elementum.
            Vivamus sodales .
          </p>
        </div>
        <div className={styles["right-container"]}>
          <img src={meetingImage} alt="" />
          <p className={styles.name}>Motivating Course</p>
          <p className={styles["desc-right"]}>
            Celebrate success right, the only way, apple. To succeed you must
            believe. When you believe, you will succeed.
          </p>
          <p className={styles.motto}>Motivating Students to Learn - Revised</p>
          <hr />
          <div className={styles.rating}>
            <p>⭐⭐⭐⭐⭐</p>
            <p className={styles.price}>$25</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
