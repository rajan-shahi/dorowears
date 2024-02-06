import React from "react";
import sales from "../assets/sales/sales.jpg";
import sales1 from "../assets/sales/sales1.jpg";

const Sales = () => {
  return (
    <div className=" bg-[#F3F3EF] border-b border-gray-500 flex flex-col py-20 justify-center items-center">
      <div className="  grid md:grid-cols-2 justify-center items-center gap-14 w-11/12">
        <div>
          <img
            className="  relative md:h-[80vh] md:w-[40vw] bg-primary-250 py-3 px-3 cursor-pointer"
            src={sales1}
            alt=""
          />{" "}
          <span className=" absolute z-20  md:-mt-96  -mt-64 pl-20 flex justify-center items-center flex-col gap-2">
            <h1 className="   tracking-widest text-primary-350 font-semibold text-4xl">MANE`S</h1>
            <h1  className="  tracking-widest text-primary-350 font-semibold text-4xl">SALE</h1>
          </span>
        </div>
        <div>
          <img
            className="  relative md:h-[80vh] md:w-[40vw] bg-primary-250 py-3 px-3 cursor-pointer"
            src={sales}
            alt=""
          />
          <span className=" absolute z-30 md:-mt-96  -mt-64 pl-20  flex justify-center items-center flex-col gap-2">
            <h1  className="   tracking-widest text-primary-350 font-semibold text-4xl">WOMEN`S</h1>
            <h1 className="  tracking-widest text-primary-350 font-semibold text-4xl">SALE</h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sales;
