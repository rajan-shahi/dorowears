import top1 from "../assets/top/top1.webp";
import top2 from "../assets/top/top2.webp";
import top3 from "../assets/top/top3.webp";
import top4 from "../assets/top/top4.webp";
import top5 from "../assets/top/top5.webp";
import top6 from "../assets/top/top6.webp";
import top7 from "../assets/top/top7.webp";
import top8 from "../assets/top/top8.webp";
import top9 from "../assets/top/top9.webp";
import top10 from "../assets/top/top10.webp";
import top11 from "../assets/top/top11.webp";
import top12 from "../assets/top/top12.webp";

const TopSells = () => {
  return (
    <div className=" bg-[#F3F3EF] flex py-10 justify-center items-center">
      <div className=" flex flex-col gap-2 justify-between items-center w-11/12">
        <span className=" flex justify-center items-center border-b py-3 w-full text-primary-350 text-xl font-semibold">
          Top Sells
        </span>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-8 pt-5">
          {items.map((item, index) => (
            <div
              key={index}
              className=" border border-transparent hover:border-primary-350 duration-500 flex flex-col gap-2 pb-5"
            >
              <div key={index} className="relative group">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-auto transition duration-1000 transform"
                />
                <img
                  src={item.image2}
                  alt=""
                  className="absolute inset-0 w-full h-auto  group-hover:duration-500 hidden group-hover:block"
                />
              </div>
              <span className=" flex justify-between px-4">
                <span className="  text-gray-600 font-semibold text-md">
                  {item.name}
                </span>
                <h1 className=" text-md text-primary-350 font-semibold">
                  {item.price}
                </h1>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSells;

const items = [
  {
    image: top1,
    image2: top10,
    name: "Lilli structured-sleeve shirt",
    price: "$118",
  },
  {
    image: top2,
    image2: top4,
    name: "Allerga Gathered-Neck sleeveles Blouse",
    price: "$92",
  },
  {
    image: top3,
    image2: top1,
    name: "Jude Cropped Tie-Front Top",
    price: "$85",
  },
  {
    image: top4,
    image2: top5,
    name: "Yoon Cargo Pocket Short",
    price: "$109",
  },
  {
    image: top5,
    image2: top6,
    name: "Split Back Shirl",
    price: "$52",
  },
  {
    image: top6,
    image2: top7,
    name: "Semi-Sheer Tie-Back Shirl",
    price: "$128",
  },
  {
    image: top7,
    image2: top8,
    name: "Kenny-Neck Tee",
    price: "$72",
  },
  {
    image: top8,
    image2: top9,
    name: "Allegra Gathered-Neck Sleeve Blouse",
    price: "$99",
  },
  {
    image: top9,
    image2: top11,
    name: "Harper Long-sleeve Wrap Top",
    price: "$88",
  },
  {
    image: top10,
    image2: top12,
    name: "Neck-Long-Sleeve Tee",
    price: "$62",
  },
  {
    image: top11,
    image2: top10,
    name: "Jordy Square-Neck Short Sleeve Tee",
    price: "$63",
  },
  {
    image: top12,
    image2: top1,
    name: "Nikki Reversible Ruchhed Tee",
    price: "$88",
  },
];
