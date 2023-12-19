'use client'
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function Cards() {
  const list = [
    {
      title: "Buffalo Chicken",
      img: "/images/buffalochicken.webp",
      price: "$13.99",
    },
    {
      title: "Pepperoni",
      img: "/images/pepperoni.webp",
      price: "$11.99",
    },
    {
      title: "Barbeque Chicken",
      img: "/images/bar.webp",
      price: "$13.99",
    },
    {
      title: "Meat Lover",
      img: "/images/meatlover.webp",
      price: "$17.99",
    },
    {
      title: "Veggie Wave",
      img: "/images/veggiewave.webp",
      price: "$9.99",
    },
    {
      title: "Spinach Delight",
      img: "/images/spy.webp",
      price: "$9.99",
    },
    {
      title: "Wisconsin Cheese",
      img: "/images/wis.webp",
      price: "$9.99",
    },
    {
      title: "Deluxe",
      img: "/images/deluxe.webp",
      price: "$9.99",
    },
    {
      title: "Ranch Chicken",
      img: "/images/veggiewave.webp",
      price: "$9.99",
    },
    {
      title: "Feta Cheese",
      img: "/images/spy.webp",
      price: "$9.99",
    },
    {
      title: "Supreme",
      img: "/images/wis.webp",
      price: "$9.99",
    },
    {
      title: "Maxiee",
      img: "/images/deluxe.webp",
      price: "$9.99",
    },
  ];

  return (




    <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 px-4 sm:px-6 lg:px-40">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  
  );
}
