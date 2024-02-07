import React from "react";
import featured1 from "../assets/featured/featured1.webp";
import featured2 from "../assets/featured/featured2.webp";
import featured3 from "../assets/featured/featured3.webp";
import featured4 from "../assets/featured/featured4.webp";
const FeaturedCollection = () => {
  return (
    <div className=" bg-[#F3F3EF] flex flex-col gap-4 border-t  border-gray-700 justify-center py-10 items-center">
      <span className=" md:text-3xl text-2xl text-gray-700  font-semibold tracking-widest">FEATURED COLLECTIONS</span>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 scroll-m-2 gap-4 w-11/12 justify-center items-center">
        {items.map((item, index) => (
          <div  key={index} className=" group flex flex-col gap-3 justify-center items-center">
            <img className=" object-cover  cursor-pointer" src={item.img} alt="" />
            <span className=" text-gray-700 font-semibold text-2xl  tracking-widest italic cursor-pointer group-hover:underline duration-500">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCollection;

const items = [
  {
    img: featured1,
    name: "Dresses",
  },
  {
    img: featured2,
    name: "Tops",
  },
  {
    img: featured3,
    name: "Sweaters",
  },
  {
    img: featured4,
    name: "Skirts",
  },
];
