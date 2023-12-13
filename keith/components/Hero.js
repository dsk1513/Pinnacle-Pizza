// components/Hero.js
import React from "react";


const Hero = ({ backgroundImage, title, subtitle, onOrderNowClick }) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className={styles.hero} style={backgroundStyle}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>{title}</h1>

          {/* When this button is clicked, it will call the function passed from the parent */}
          <button className="orangeButton" onClick={onOrderNowClick}>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;