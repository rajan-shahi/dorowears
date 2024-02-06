import scrool1 from "../assets/scrool/scrool1.webp";
import scrool2 from "../assets/scrool/scrool2.webp";
import scrool3 from "../assets/scrool/scrool3.webp";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import React from "react";

const HeroSection = () => {
  return (
    <div className=" ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide>
            <div
              key={index}
              className=" flex flex-col items-center justify-center"
            >
              <img className=" relative object-cover" src={item.img} alt="" />
              <div className=" md:w-5/12 absolute  md:mr-96 flex flex-col gap-4">
                <span data-aos="fade-up"
     data-aos-duration="1500" className=" md:text-4xl  text-gray-700 font-semibold tracking-widest">
                  {item.name}
                </span>
                <span data-aos="fade-up"
     data-aos-duration="2000" className=" md:flex hidden tracking-widest text-xl text-gray-600">
                  {item.desc}
                </span>
                <button data-aos="fade-up"
     data-aos-duration="2500" className=" flex  hover:bg-primary-300 duration-500  bg-primary-350 w-max md:px-10 md:py-2 py-1 px-5 md:text-md text-sm text-gray-100">
                  {item.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;

const items = [
  {
    img: scrool2,
    name: "WOMEN FASHION COLLECTION",
    desc: "Simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry. ",
    button: "SUB COLLECTION",
  },
  {
    img: scrool1,
    name: "NEW FASHION COLLECTION",
    desc: "Simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry.",
    button: "SUB COLLECTION",
  },

  {
    img: scrool3,
    name: "MEN'S FASHION COLLECTION",
    desc: "Simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry. ",
    button: "SUB COLLECTION",
  },
];
