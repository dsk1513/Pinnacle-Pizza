'use client'

import React from "react";

const Aboutuss = () => {
  return (
    <section id="Aboutuss" className="bg-white-500">
      <h2 className="text-5xl font-bold my-16 text-center text-orange-500">Our Story</h2>

      <div className="container mx-auto px-4 lg:px-16">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
          <div className="lg:w-1/2">
            <div className="overflow-hidden rounded-lg shadow-lg h-80">
              <img 
                src="/images/dough.jpeg"
                alt="Tradition of Pizza Making"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
    <h1 className="text-2xl text-orange-500 font-bold mb-4">Crafting the Perfect Base</h1>
    <p className="text-xl text-white mb-6">
        Every great pizza begins with the foundation - the dough. Our meticulous process involves hand-kneading the dough to achieve that perfect balance of chewiness and crisp. Sprinkled with just the right amount of flour, our dough is a testament to the art of pizza making, promising an unforgettable crust for every pizza at Pinnacle Pizza.
    </p>
</div>


        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
          <div className="lg:w-1/2">
            <div className="overflow-hidden rounded-lg shadow-lg h-80">
              <img 
                src="/images/pizza2.webp"
                alt="Artisanal Ingredients"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="lg:w-1/2 ">
          <h1 className="text-2xl text-orange-500 font-bold mb-4">Fire-Kissed Flavor</h1>
          <p className="text-xl text-white mb-6">
            At Pinnacle Pizza, the magic happens in our traditional brick oven, where each pizza is cooked to smoky perfection. The intense heat locks in the flavors, melds the toppings with the cheese, and creates that signature charred crust. This image captures the essence of our time-honored baking method - a dance of flame and flavor.
            </p>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2">
            <div className="overflow-hidden rounded-lg shadow-lg h-80">
              <img 
                src="/images/pizza3.jpeg"
                alt="Community and Connection"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="lg:w-1/2 ">
          <h1 className="text-2xl text-orange-500 font-bold mb-4">The Final Touch</h1>
            <p className="text-xl  text-white mb-6">
              With a beaming smile, our chef presents the final product: a pizza thats a feast for both the eyes and the palate. Each ingredient is chosen for its freshness and quality, ensuring that every slice from Pinnacle Pizza offers a harmonious blend of toppings on a perfectly baked crust. Heres where culinary expertise meets the joy of serving you the best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutuss;
