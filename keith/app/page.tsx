import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import AboutUs from "@/components/AboutUs";
import '/Users/dineshchalla/Desktop/keith/group-project/keith/styles/globals.css'; // Adjust this path
/
export default function Home() {
  return (
    <div className="header-top">
      <Header />

      <Hero
        backgroundImage="/images/heroblack.png"
        
        title={<><span>HOT AND CHEESY</span><br /><span>PIZZA</span></>}
        subtitle="50% OFF on your first order 🌟🍕"
      />
      <Cards />
      <AboutUs />
    </div>
  );
}
