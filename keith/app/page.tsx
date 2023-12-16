import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import Aboutuss from "@/components/Aboutuss";
import "../styles/globals.css"

export default function Home() {
  return (
<div>
    <div className="header-top">
      <Header /></div> 

      <Hero
        backgroundImage="/images/heroblack.png"
        title={<><span>HOT AND CHEESY</span><br /><span>PIZZA</span></>}
        subtitle="50% OFF on your first order 🌟🍕"
      />
      <Cards />
      <Aboutuss/>
    </div>
  );
}
