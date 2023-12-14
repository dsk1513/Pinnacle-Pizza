// components/AboutUs.tsx
'use client'
import React from "react";

const Aboutuss = () => {
  return (
    <section className="py-12 bg-black font-worksans">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl text-white font-semibold">About US</h2>
        <article className="text-white text-[16px] font-worksans-medium leading-relaxed mt-[2rem]">
        Pinnacle Pizza, an Italian restaurant, offers a culinary journey inspired by the rich traditions of Italy. Immerse yourself in a warm and inviting ambiance where each bite is a celebration of authentic flavors and passion for exceptional food.
        </article>
        <article className="text-white text-[16px] font-worksans-medium leading-relaxed mt-[2rem]">
          At Pinnacle Pizza, we believe in the art of dining. Our attentive staff and rustic-chic decor create an atmosphere that encourages savoring every moment. Whether you're sharing a meal with family, enjoying a romantic evening, or hosting a special event, our Italian restaurant promises an unforgettable experience.
        </article>
        
        <article className="text-white text-[16px] font-worksans-medium leading-relaxed mt-[2rem]">
        Indulge in the essence of Italy with our carefully curated wine list, offering the perfect complement to your meal. From the first bite to the last, Pinnacle Pizza invites you to elevate your dining experience with the pinnacle of Italian culinary excellence. Buon Appetito!
        </article>

<br />
<br />
<br />
<br />

       
  <article 
  className="text-white text-[16px] font-worksans-medium leading-relaxed mt-[2rem]"
  style={{ textAlign: 'left', paddingLeft: '10%' }}
>
  <span>FIND OUR RESTAURANTS</span>
  <span style={{ margin: '0 320px' }}></span> {/* Adjust the margin as needed */}
  <span>WORKING HOURS</span>
</article>



<article 
  className="text-white text-[16px] font-worksans-medium leading-relaxed mt-4 mb-6">
    <div>1654 R. Don Road Avenue #304, Town City, 8524 (602) 867-1010 MON-FRI 10AM-8PM</div>
    <div>2567 R. Erick Lam RD #235, Town City, 8524 (602) 867-1011</div>
    <div>3701 R. Erwin St #104, Town City, 8524 (602) 867-1014</div>
    <div>1023 R. W. Caroll St Jones #125, Town City, 8524 (602) 867-1018</div>
    </article>



  </div>
    </section>
  );
};

export default Aboutuss;
