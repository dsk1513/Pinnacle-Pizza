import React from "react";
import Image from 'next/image'; // Import Image from next/image
import styles from "./hero.module.css"; // Adjust the path to your CSS file

// Define an interface for the component's props
interface HeroProps {
  backgroundImage: string;
  title: React.ReactNode; // Using React.ReactNode for JSX elements
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImage, title, subtitle }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        {/* Replace img with Image component */}
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
