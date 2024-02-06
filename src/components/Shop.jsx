import React from "react";
import shop1 from "../assets/shop/shop1.jpg";
import shop2 from "../assets/shop/shop5.jpg";
import shop3 from "../assets/shop/shop3.jpg";
import shop4 from "../assets/shop/shop4.jpg";

const Shop = () => {
  return (
    <div className="  flex py-20 justify-center items-center">
      <div className="  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 w-11/12">
        <div className=" rounded-b-3xl  h-max md:-mt-10 border border-primary-300">
          <img
            className=" object-cover  h-[60vh] md:w-[40vw]"
            src={shop1}
            alt=""
          />
          <div className=" flex justify-between px-4 pb-4">
            <span className="  text-primary-300 text-xl">Jackets</span>
            <button className=" bg-primary-300 px-2 py-1 rounded-md text-gray-100 hover:bg-primary-250">
              SHOP NOW
            </button>{" "}
          </div>
        </div>
        <div className=" md:mt-10 h-max border  border-primary-300 rounded-t-3xl">
          <img
            className=" px-5 object-cover  h-[60vh] md:w-[40vw]"
            src={shop2}
            alt=""
          />
          <div className="  flex justify-between px-4 pb-4">
            <span className="  text-primary-300 text-xl">T-shet</span>
            <button className=" bg-primary-300 px-2 py-1 rounded-md text-gray-100 hover:bg-primary-250">
              SHOP NOW
            </button>{" "}
          </div>
        </div>
        <div className=" rounded-md px-2 h-max md:-mt-10 border border-primary-300">
          <img
            className=" object-cover  h-[60vh] md:w-[40vw]"
            src={shop3}
            alt=""
          />
          <div className=" flex justify-between px-4 pb-4">
            <span className="  text-primary-300 text-xl">Fllece</span>
            <button className=" bg-primary-300 px-2 py-1 rounded-md text-gray-100 hover:bg-primary-250">
              SHOP NOW
            </button>{" "}
          </div>
        </div>
        <div className=" rounded-md px-2 h-max md:mt-10 border border-primary-300">
          <img
            className=" object-cover  h-[60vh] md:w-[40vw]"
            src={shop4}
            alt=""
          />
          <div className=" flex justify-between px-4 pb-4">
            <span className="  text-primary-300 text-xl">Tops</span>
            <button className=" bg-primary-300 px-2 py-1 rounded-md text-gray-100 hover:bg-primary-250">
              SHOP NOW
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
