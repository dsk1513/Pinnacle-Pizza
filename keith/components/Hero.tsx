// components/Hero.js
import React from "react";
import styles from "./Hero.module.css"; // Import the module styles

const Hero = ({ backgroundImage, title, subtitle, onOrderNowClick }) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className={styles.hero} style={backgroundStyle}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
