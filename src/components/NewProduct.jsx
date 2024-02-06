import React from "react";
import product1 from "../assets/newProduct/product1.jpg";
import product2 from "../assets/newProduct/product2.jpg";
import product3 from "../assets/newProduct/product3.jpg";
import product4 from "../assets/newProduct/product4.jpg";
import product5 from "../assets/newProduct/product5.jpg";
import product6 from "../assets/newProduct/product6.jpg";

const NewProduct = () => {
  return (
    <div className=" bg-[#F3F3EF] border-t border-gray-500  border-b   py-10 flex justify-center">
      <div className=" grid lg:grid-cols-3 md:grid-cols-2  gap-4 w-11/12">
        {items.map((item, index) => (
          <div className=" group border hover:border-primary-200 duration-500  py-4 flex flex-col items-center gap-3">
            <img
              className=" cursor-pointer hover:scale-105 duration-500 group relative object-cover h-80 w-80"
              src={item.img}
              alt=""
            />
            <span className=" cursor-pointer group-hover:text-primary-300 text-md text-primary-400 font-semibold">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProduct;

const items = [
  {
    name: "Dro Rbbed Crop",
    img: product1,
  },
  {
    name: "Sweatshert",
    img: product2,
  },
  {
    name: "Winter Jacket",
    img: product3,
  },
  {
    name: "Dri Fit",
    img: product4,
  },
  {
    name: "T-Shirt",
    img: product5,
  },
  {
    name: "Shorts",
    img: product6,
  },
];
