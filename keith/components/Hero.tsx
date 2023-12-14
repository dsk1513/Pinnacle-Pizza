import React from "react";
import styles from "./hero.module.css"; // Adjust the path to your CSS file

const Hero = ({ backgroundImage, title, subtitle }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <img src={backgroundImage} alt="Hero" />
      </div>
      <div className={styles.heroRight}>
        <div className={styles.content}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
