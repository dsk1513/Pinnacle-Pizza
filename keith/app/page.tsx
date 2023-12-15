import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import Aboutuss from "@/components/Aboutuss";
import "../styles/globals.css"
import Script from "next/script";
export default function Home() {
  return (
<div>
   <Script 
    strategy="afterInteractive"
   src="https://www.googlegletagmanager.com/gtag/jhs?id=G-7RJ25106X0"/>
   <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || []:
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config','G-7RJ25106X0');

    `}
   </Script>
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
