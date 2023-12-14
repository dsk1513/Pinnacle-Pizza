import React from "react";
import Image from "next/image";
import styles from "./hero.module.css"; // Adjust the path to your CSS file

interface HeroProps {
  backgroundImage: string;
  title: React.ReactNode;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImage, title, subtitle }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        {/* Replace with Image component and provide width and height or a layout property */}
        <Image src={backgroundImage} alt="Hero" layout="fill" objectFit="cover" />
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
